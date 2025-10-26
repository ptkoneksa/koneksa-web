<script lang="ts">
  import { PUBLIC_CONNECT_API_URL } from "$env/static/public";
  import Icon from "@iconify/svelte";

  let { data } = $props();
  let { url } = data;

  const targetRedirectUrl = $derived(url.searchParams.get("targetRedirectUrl"));

  let isEmailAndPassword = $state(false);

  const handleOAuthLogin = (provider: string) => {
    const authUrl = new URL(`${PUBLIC_CONNECT_API_URL}/auth/oauth/${provider}`);
    authUrl.searchParams.set("targetRedirectUrl", targetRedirectUrl ?? "");
    window.location.href = authUrl.toString();
  };
</script>

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
        <!-- Email & Password Section -->
        <form class="px-10">
          <div>
            <label for="email">Email</label>
            <div class="input flex items-center gap-2">
              <Icon icon="mingcute:mail-line" width="24" height="24" />
              <input
                type="email"
                id="email"
                required
                placeholder="example@email.com"
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
              />
            </div>
            <a href="/auth/forgot-password" class="text-brand underline text-xs"
              >Forgot password?</a
            >
          </div>
          <button class="button w-full mt-4">Sign In</button>
          <p class="text-center text-sm text-black/70 mt-4">
            Don't have an account? <a
              href="/auth/register"
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
    </div>
    <p class="text-xs text-black/70 mt-4">
      You will be redirected to <span class="text-brand underline"
        >{targetRedirectUrl
          ? new URL(targetRedirectUrl).host
          : "account settings"}</span
      > after successful login.
    </p>
  </div>
</div>
