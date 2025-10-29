<script lang="ts">
  import { goto } from "$app/navigation";
  import { PUBLIC_CONNECT_API_URL } from "$env/static/public";
  import type { AuthResponse } from "$lib/api/connect/models";
  import type { ConnectWebResponse } from "$lib/api/connect/web_response";
  import { connectUser } from "$lib/stores/connect.js";
  import Icon from "@iconify/svelte";

  let { data } = $props();
  let { targetRedirectUrl, url } = data;

  const isRegister = $derived(url.searchParams.get("register") == "true");

  let isEmailAndPassword = $state(false);

  const handleOAuthLogin = (provider: string) => {
    const authUrl = new URL(`${PUBLIC_CONNECT_API_URL}/auth/oauth/${provider}`);
    authUrl.searchParams.set("targetRedirectUrl", targetRedirectUrl);
    window.location.href = authUrl.toString();
  };

  let loginEmail = $state("");
  let loginPassword = $state("");
  let loginError = $state<string | null>(null);
  let loginLoading = $state(false);
  const handleEmailAndPasswordLogin = async (e: Event) => {
    e.preventDefault();

    loginError = null;
    loginLoading = true;
    try {
      const response = await fetch(`${PUBLIC_CONNECT_API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseBody: ConnectWebResponse<AuthResponse> =
        await response.json();
      if (!responseBody.success) {
        throw new Error(responseBody.message);
      }

      if (!responseBody.data) {
        throw new Error("No data received");
      }

      localStorage.setItem("accessToken", responseBody.data.accessToken);
      localStorage.setItem("refreshToken", responseBody.data.refreshToken);
      connectUser.set(responseBody.data.user);

      if (!responseBody.data.user.isEmailVerified) {
        goto("/auth/verify-email");
      } else {
        window.location.href = targetRedirectUrl;
      }
    } catch (error) {
      console.error(error);
      loginError = error instanceof Error ? error.message : "Failed to login";
    } finally {
      loginLoading = false;
    }
  };

  let registerEmail = $state("");
  let registerFullName = $state("");
  let registerPassword = $state("");
  let registerConfirmPassword = $state("");
  let registerError = $state<string | null>(null);
  let registerLoading = $state(false);
  const handleEmailAndPasswordRegister = async (e: Event) => {
    e.preventDefault();

    registerError = null;
    registerLoading = true;
    try {
      const response = await fetch(`${PUBLIC_CONNECT_API_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          email: registerEmail,
          fullName: registerFullName,
          password: registerPassword,
          confirmPassword: registerConfirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseBody: ConnectWebResponse<AuthResponse> =
        await response.json();
      if (!responseBody.success) {
        throw new Error(responseBody.message);
      }

      if (!responseBody.data) {
        throw new Error("No data received");
      }

      localStorage.setItem("accessToken", responseBody.data.accessToken);
      localStorage.setItem("refreshToken", responseBody.data.refreshToken);
      goto("/auth/verify-email");
    } catch (error) {
      console.error(error);
      registerError =
        error instanceof Error ? error.message : "Failed to register";
    } finally {
      registerLoading = false;
    }
  };
</script>

<svelte:head>
  <title>Auth | Connect Together, Made Simple.</title>
  <meta name="description" content="Login or register to Connect" />
  <meta name="keywords" content="Auth, Connect, Together, Made, Simple" />
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
      <div class="flex items-center justify-center gap-2">
        <h1 class="font-bold">Auth by</h1>
        <img
          src="/logo/connect_logotype.png"
          alt="Connect"
          class="h-8 md:h-12 inline-block"
        />
      </div>
      <hr class="my-2 border border-black/10" />

      {#if isRegister}
        <!-- Email & Password Register Section -->
        <form class="px-10" onsubmit={handleEmailAndPasswordRegister}>
          <div>
            <label for="email">Email</label>
            <div class="input flex items-center gap-2">
              <Icon icon="mingcute:mail-line" width="24" height="24" />
              <input
                type="email"
                id="email"
                required
                placeholder="example@email.com"
                bind:value={registerEmail}
              />
            </div>
          </div>
          <div>
            <label for="full-name">Full Name</label>
            <div class="input flex items-center gap-2">
              <Icon icon="mingcute:user-1-fill" width="24" height="24" />
              <input
                type="text"
                id="full-name"
                required
                placeholder="John Doe"
                bind:value={registerFullName}
              />
            </div>
          </div>
          <div>
            <label for="password">Password</label>
            <div class="input flex items-center gap-2">
              <Icon icon="mingcute:lock-line" width="24" height="24" />
              <input
                type="password"
                id="password"
                required
                placeholder="P@ssw0rd"
                bind:value={registerPassword}
              />
            </div>
          </div>
          <div>
            <label for="confirm-password">Confirm Password</label>
            <div class="input flex items-center gap-2">
              <Icon icon="mingcute:lock-line" width="24" height="24" />
              <input
                type="password"
                id="confirm-password"
                required
                placeholder="P@ssw0rd"
                bind:value={registerConfirmPassword}
              />
            </div>
          </div>
          {#if registerError}
            <p class="text-red-500 mt-2">Error: {registerError}</p>
          {/if}
          <button
            class={`button w-full mt-4 ${registerLoading ? "opacity-50 animate-pulse cursor-not-allowed" : ""}`}
            type="submit"
            disabled={registerLoading}
            >{registerLoading ? "Registering..." : "Register"}</button
          >
          <p class="text-center text-sm text-black/70 mt-4">
            Already have an account? <a
              href="/auth"
              class="text-brand underline">Sign in</a
            >
          </p>
        </form>
      {:else}
        <!-- OAuth Section -->
        {#if !isEmailAndPassword}
          <div>
            <h4 class="text-center">Continue with</h4>
            <div class="flex items-center justify-center gap-2">
              <button
                class="button bg-white border border-black/70 text-black flex items-center gap-2"
                onclick={() => handleOAuthLogin("google")}
              >
                <Icon icon="devicon:google" width="24" height="24" />
                <span>Google</span>
              </button>
              <button
                class="button bg-white border border-black/70 text-black flex items-center gap-2"
                onclick={() => handleOAuthLogin("github")}
              >
                <Icon icon="devicon:github" width="24" height="24" />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        {:else}
          <!-- Email & Password Login Section -->
          <form class="px-10" onsubmit={handleEmailAndPasswordLogin}>
            <div>
              <label for="email">Email</label>
              <div class="input flex items-center gap-2">
                <Icon icon="mingcute:mail-line" width="24" height="24" />
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="example@email.com"
                  bind:value={loginEmail}
                />
              </div>
            </div>
            <div>
              <label for="password">Password</label>
              <div class="input flex items-center gap-2">
                <Icon icon="mingcute:lock-line" width="24" height="24" />
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="P@ssw0rd"
                  bind:value={loginPassword}
                />
              </div>
              <a
                href="/auth/forgot-password"
                class="text-brand underline text-xs">Forgot password?</a
              >
            </div>
            {#if loginError}
              <p class="text-red-500 mt-2">Error: {loginError}</p>
            {/if}
            <button
              class={`button w-full mt-4 ${loginLoading ? "opacity-50 animate-pulse cursor-not-allowed" : ""}`}
              type="submit"
              disabled={loginLoading}
              >{loginLoading ? "Signing in..." : "Sign In"}</button
            >
            <p class="text-center text-sm text-black/70 mt-4">
              Don't have an account? <a
                href="/auth?register=true"
                class="text-brand underline">Register</a
              >
            </p>
          </form>
        {/if}

        <!-- Button Switch -->
        <div>
          <div class="flex items-center gap-4 w-1/2 mx-auto my-2">
            <hr class="w-full border border-black/10" />
            <span>Or</span>
            <hr class="w-full border border-black/10" />
          </div>
          <button
            class="block mx-auto underline text-brand"
            onclick={() => (isEmailAndPassword = !isEmailAndPassword)}
          >
            {isEmailAndPassword
              ? "Continue with OAuth (Recommended)"
              : "Continue with email and password"}
          </button>
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
