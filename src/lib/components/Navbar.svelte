<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";

  let { serviceInfo, navigation, data } = $props();

  let isNavigationMobileOpen = $state(false);
</script>

<nav>
  <!-- Desktop -->
  <div class="hidden md:block container mx-auto py-4 px-8">
    <div class="flex items-center justify-between gap-4">
      <div>
        <a href={serviceInfo.link}>
          <img
            src={serviceInfo.image}
            alt={serviceInfo.name}
            class="h-10 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </a>
      </div>
      <div class="flex items-center gap-4 uppercase">
        {#each navigation as item}
          <a
            href={item.href}
            class="font-medium hover:text-black/70 {data.url.pathname ==
            item.href
              ? 'text-brand font-bold'
              : ''}"
          >
            {item.label}
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="md:hidden container mx-auto py-4 px-8">
    <div class="flex items-center justify-between gap-4">
      <div>
        <a href={serviceInfo.link}>
          <img src={serviceInfo.image} alt={serviceInfo.name} class="h-10" />
        </a>
      </div>
      <button
        class="block"
        onclick={() => (isNavigationMobileOpen = !isNavigationMobileOpen)}
      >
        <Icon icon="mingcute:menu-line" width="24" height="24" />
      </button>
    </div>

    {#if isNavigationMobileOpen}
      <div
        in:fly={{ duration: 300, y: -500 }}
        out:fly={{ duration: 300, y: -500 }}
        class="fixed top-0 left-0 w-full h-screen bg-brand text-white z-50"
      >
        <div class="container mx-auto h-full py-4 px-8">
          <div class="flex items-center justify-between gap-4">
            <div>
              <a href={serviceInfo.link}>
                <img
                  src={serviceInfo.image}
                  alt={serviceInfo.name}
                  class="h-10 brightness-0 invert"
                />
              </a>
            </div>
            <button
              class="block"
              onclick={() => (isNavigationMobileOpen = false)}
            >
              <Icon icon="mingcute:close-line" width="24" height="24" />
            </button>
          </div>

          <div
            class="flex flex-col gap-4 items-center justify-center uppercase h-[70%]"
          >
            {#each navigation as item}
              <a
                href={item.href}
                class="text-lg font-medium hover:text-white/70 {data.url
                  .pathname == item.href
                  ? 'text-brand font-bold'
                  : ''}"
              >
                {item.label}
              </a>
            {/each}
          </div>
          <div class="flex items-center justify-center gap-4">
            <a href="https://koneksa.id" class="text-sm"> Visit koneksa.id </a>
          </div>
        </div>
      </div>
    {/if}
  </div>
</nav>
