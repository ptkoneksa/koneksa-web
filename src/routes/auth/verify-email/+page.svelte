<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_CONNECT_API_URL } from "$env/static/public";
  import {
    getAccessToken,
    verifyAccessToken,
  } from "$lib/api/connect/access_token.js";
  import type { ConnectWebResponse } from "$lib/api/connect/web_response.js";
  import { maskEmail } from "$lib/util/masking.js";
  import Icon from "@iconify/svelte";

  let { data } = $props();
  let { connectUser, url, lastVerifyEmailSentAt } = data;

  const targetRedirectUrl = $derived(
    url.searchParams.get("targetRedirectUrl") ?? url.host + "/account"
  );
  const verifyEmailSentSuccess = $derived(
    url.searchParams.get("sent") === "true"
  );

  let sendVerifyEmailError = $state<string | null>(null);
  let sendVerifyEmailLoading = $state(false);
  let sendVerifyEmailCooldownTime = $state(0);
  let isVerifyEmailCooldown = $derived(sendVerifyEmailCooldownTime > 0);

  $effect(() => {
    let interval: number;

    if (lastVerifyEmailSentAt) {
      const updateCooldown = () => {
        sendVerifyEmailCooldownTime =
          new Date(lastVerifyEmailSentAt).getTime() +
          30000 -
          new Date().getTime();

        if (sendVerifyEmailCooldownTime <= 0) {
          clearInterval(interval);
        }
      };

      updateCooldown();

      if (sendVerifyEmailCooldownTime > 0) {
        interval = setInterval(updateCooldown, 1000);
      }
    } else {
      sendVerifyEmailCooldownTime = 0;
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  const handleSendVerifyEmail = async (e: Event) => {
    e.preventDefault();

    if (isVerifyEmailCooldown) {
      sendVerifyEmailError = `Please try again in ${Math.ceil(
        sendVerifyEmailCooldownTime / 1000
      )} seconds.`;
      return;
    }

    sendVerifyEmailError = null;
    sendVerifyEmailLoading = true;
    try {
      const response = await fetch(
        `${PUBLIC_CONNECT_API_URL}/auth/verify-email-request`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );
      const responseBody: ConnectWebResponse<void> = await response.json();
      if (!responseBody.success) {
        throw new Error(responseBody.message);
      }
      localStorage.setItem("lastVerifyEmailSentAt", new Date().toISOString());
      window.location.href = `${url.pathname}?sent=true`;
    } catch (error) {
      console.error(error);
      sendVerifyEmailError =
        error instanceof Error ? error.message : "Failed to send verify email";
    } finally {
      sendVerifyEmailLoading = false;
    }
  };
</script>

<div class="container mx-auto p-4 pb-24">
  <div class="flex flex-col items-center justify-center p-4 pb-24 min-h-screen">
    <div
      class="border-2 border-brand bg-white rounded-tl-3xl rounded-br-3xl p-4 w-full max-w-screen-sm"
    >
      <div class="flex items-center justify-center gap-2">
        <h1 class="font-bold">Verify by</h1>
        <img
          src="/logo/connect_logotype.png"
          alt="Connect"
          class="h-8 md:h-12 inline-block"
        />
      </div>
      <hr class="my-2 border border-black/10" />
      {#if connectUser}
        <div>
          {#if !verifyEmailSentSuccess}
            <p class="text-center">
              Your email is not verified yet. Please verify your email to
              continue.
            </p>
            {#if sendVerifyEmailError}
              <p class="text-red-500 text-center">
                Error: {sendVerifyEmailError}
              </p>
            {/if}
            <button
              class={`button mx-auto my-2 bg-white text-black border border-brand flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
              onclick={handleSendVerifyEmail}
              disabled={sendVerifyEmailLoading || isVerifyEmailCooldown}
            >
              <Icon icon="mingcute:mail-line" width="24" height="24" />
              <span>
                {sendVerifyEmailLoading
                  ? "Sending..."
                  : `Send email verification to ${maskEmail(connectUser.email)}`}
              </span>
            </button>
          {:else}
            <div class="mt-4 text-black/70 text-center">
              <h2 class="text-brand text-center font-bold">
                Verification email sent successfully
              </h2>
              <p>
                Please check your email for the <span
                  class="text-brand underline">verification link</span
                >. If you don't see it, check your spam folder.
              </p>
              <p class="mt-4">
                Didn't receive the email?
                {#if isVerifyEmailCooldown}
                  <span
                    >Please try again in {Math.ceil(
                      sendVerifyEmailCooldownTime / 1000
                    )} seconds.</span
                  >
                {:else}
                  <button
                    class="text-brand underline"
                    onclick={handleSendVerifyEmail}>Send again</button
                  >
                {/if}
              </p>
            </div>
          {/if}
        </div>
      {/if}
    </div>
    <p class="text-xs text-black/70 mt-4">
      You will be redirected to <span class="text-brand underline"
        >{targetRedirectUrl}</span
      > after successful login.
    </p>
  </div>
</div>
