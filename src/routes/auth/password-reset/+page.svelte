<script lang="ts">
  import { PUBLIC_CONNECT_API_URL } from "$env/static/public";
  import type { ConnectWebResponse } from "$lib/api/connect/web_response.js";
  import Icon from "@iconify/svelte";

  let email = $state("");
  let sendPasswordResetError = $state<string | null>(null);
  let sendPasswordResetLoading = $state(false);
  let sendPasswordResetSuccess = $state(false);
  const handleSendPasswordReset = async (e: Event) => {
    e.preventDefault();

    sendPasswordResetError = null;
    sendPasswordResetLoading = true;
    try {
      const response = await fetch(
        `${PUBLIC_CONNECT_API_URL}/auth/password-reset-request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      const responseBody: ConnectWebResponse<void> = await response.json();
      if (!responseBody.success) {
        throw new Error(responseBody.message);
      }
      console.log(responseBody);
      sendPasswordResetSuccess = true;
    } catch (error) {
      console.error(error);
      sendPasswordResetError =
        error instanceof Error
          ? error.message
          : "Failed to send password reset email";
    } finally {
      sendPasswordResetLoading = false;
    }
  };
</script>

<svelte:head>
  <title>Password Reset | Connect Together, Made Simple.</title>
  <meta name="description" content="Reset your password to continue." />
  <meta
    name="keywords"
    content="Password Reset, Connect, Together, Made, Simple"
  />
  <meta name="author" content="PT Koneksi Kreatif Nusantara (Koneksa)" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
</svelte:head>

<div class="container mx-auto p-4 pb-24">
  <div class="flex flex-col items-center justify-center p-4 pb-24 min-h-screen">
    <div
      class="border-2 border-brand bg-white rounded-tl-3xl rounded-br-3xl p-4 w-full max-w-screen-sm"
    >
      <h1 class="font-bold">Reset Your Password</h1>
      <hr class="my-2 border border-black/10" />
      <form action="" onsubmit={handleSendPasswordReset}>
        <div>
          <label for="email">Email</label>
          <div class="input flex items-center gap-2">
            <Icon icon="mingcute:mail-line" width="24" height="24" />
            <input
              type="email"
              id="email"
              required
              placeholder="example@email.com"
              bind:value={email}
            />
          </div>
        </div>
        {#if sendPasswordResetError}
          <p class="text-red-500 mt-2">Error: {sendPasswordResetError}</p>
        {/if}
        {#if sendPasswordResetSuccess}
          <p class="text-brand mt-2">Password reset email sent successfully.</p>
        {/if}
        <button
          class={`button w-full mt-4 ${sendPasswordResetLoading ? "opacity-50 animate-pulse cursor-not-allowed" : ""}`}
          type="submit"
          disabled={sendPasswordResetLoading}
          >{sendPasswordResetLoading
            ? "Sending password reset email..."
            : "Send Password Reset Email"}</button
        >
      </form>
    </div>
  </div>
</div>
