<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();
</script>

<nav class="w-full">
  <div class="container mx-auto p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <a href="/" class="text-2xl font-bold">
          <img src="/logo/koneksa_logo.png" alt="Koneksa" class="h-10" />
        </a>
        <a href="/konvy" class="text-2xl font-bold">
          <img src="/logo/konvy_logo_brand.png" alt="Konvy" class="h-10" />
        </a>
      </div>

      <!-- Navigation -->
      <div class="flex items-center gap-4 uppercase">
        <a href="/" class="font-medium"> Home </a>
        <a href="/konvy/talents" class="font-medium"> Talents </a>
        <a href="/konvy/teams" class="font-medium"> Teams </a>
      </div>
    </div>
  </div>
</nav>

<main class="min-h-screen pt-20">
  <div class="relative z-10">
    {@render children?.()}
  </div>
</main>

<Footer navigation={[]} />
