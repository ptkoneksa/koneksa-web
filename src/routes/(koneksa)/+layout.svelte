<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Icon from "@iconify/svelte";
  import { MegaMenu } from "flowbite-svelte";

  let { children, data } = $props();
  const currentRoute = $derived(data.url.pathname);

  const navigation = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  let isProductAndServicesMenuOpen = $state(false);
  let isNavigationMobileOpen = $state(false);
</script>

<nav
  class="w-full bg-white/25 backdrop-blur-sm absolute top-0 left-0 right-0 z-10"
>
  <div class="container mx-auto p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <a href="/" class="text-2xl font-bold text-white">
          <img src="/logo/koneksa_logotype.png" alt="Koneksa" class="h-10" />
        </a>
      </div>

      <!-- Navigation Desktop -->
      <div class="hidden md:flex items-center gap-4 uppercase">
        {#each navigation as item}
          <a
            href={item.href}
            class="font-medium hover:text-black/70 {currentRoute === item.href
              ? 'text-brand font-bold'
              : ''}"
          >
            {item.label}
          </a>
        {/each}
        <div>
          <button
            class="uppercase font-medium flex items-center"
            onclick={() =>
              (isProductAndServicesMenuOpen = !isProductAndServicesMenuOpen)}
          >
            <span>Product & Services</span>
            <Icon icon="mingcute:down-small-line" width="24" height="24" />
          </button>
          <MegaMenu
            isOpen={isProductAndServicesMenuOpen}
            class="border-2 border-brand rounded-tl-3xl rounded-br-3xl"
          >
            <div class="flex flex-col gap-2">
              {#each data.productAndServices as item}
                <a
                  href={item.link}
                  target={item.target}
                  class="hover:text-brand"
                >
                  <h3>{item.name}</h3>
                </a>
              {/each}
            </div>
          </MegaMenu>
        </div>
        <a href="/auth">
          <button class="button flex items-center gap-2">
            <Icon icon="mingcute:user-1-line" width="24" height="24" />
            <span>Sign In</span>
          </button>
        </a>
      </div>

      <!-- Navigation Mobile -->
      <div class="md:hidden">
        <button
          onclick={() => (isNavigationMobileOpen = !isNavigationMobileOpen)}
        >
          <Icon icon="mingcute:menu-line" width="24" height="24" />
        </button>
        <MegaMenu
          isOpen={isNavigationMobileOpen}
          class="border-2 border-brand rounded-tl-3xl rounded-br-3xl w-full"
        >
          <div class="flex flex-col gap-2 text-lg">
            {#each navigation as item}
              <a
                href={item.href}
                class="font-medium hover:text-black/70 {currentRoute ===
                item.href
                  ? 'text-brand font-bold'
                  : ''}"
              >
                {item.label}
              </a>
            {/each}
            {#each data.productAndServices as item}
              <a href={item.link} target={item.target}>{item.name}</a>
            {/each}
            <a href="/auth">
              <button class="button flex items-center gap-2">
                <Icon icon="mingcute:user-1-line" width="24" height="24" />
                <span>Sign In</span>
              </button>
            </a>
          </div>
        </MegaMenu>
      </div>
    </div>
  </div>
</nav>

<!-- Scroll to top button -->
<button
  class="fixed bottom-4 right-4 drop-shadow-2xl bg-brand text-white rounded-tl-3xl rounded-br-3xl p-4 cursor-pointer z-50"
  onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <Icon icon="mingcute:arrow-up-line" width="24" height="24" />
</button>

<main class="min-h-screen pt-20">
  <div class="relative z-10">
    {@render children?.()}
  </div>
</main>

<Footer {navigation} />
