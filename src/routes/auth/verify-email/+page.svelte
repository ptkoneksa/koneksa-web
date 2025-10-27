<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_CONNECT_API_URL } from "$env/static/public";
  import type { AuthResponse } from "$lib/api/connect/models";
  import type { ConnectWebResponse } from "$lib/api/connect/web_response";
  import Icon from "@iconify/svelte";

  let { data } = $props();
  let { connectUser, url } = data;

  const targetRedirectUrl = $derived(
    url.searchParams.get("targetRedirectUrl") ?? url.host + "/account"
  );

  let sendVerifyEmailError = $state<string | null>(null);
  let sendVerifyEmailLoading = $state(false);
  const handleSendVerifyEmail = async (e: Event) => {
    e.preventDefault();

    sendVerifyEmailError = null;
    sendVerifyEmailLoading = true;
    try {
      const response = await fetch(
        `${PUBLIC_CONNECT_API_URL}/auth/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
    </div>
    <p class="text-xs text-black/70 mt-4">
      You will be redirected to <span class="text-brand underline"
        >{targetRedirectUrl}</span
      > after successful login.
    </p>
  </div>
</div>
