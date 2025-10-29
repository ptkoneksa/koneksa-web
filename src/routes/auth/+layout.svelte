<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";

  let { children, data } = $props();

  const navigation = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ];
</script>

<div class="grid grid-cols-2">
  <div
    class="hidden bg-brand text-white lg:flex flex-col items-center justify-center p-4"
  >
    <img src="/logo/connect_logotype_white.png" alt="Connect" class="h-16" />
    <h1>Connect Together, Made Simple.</h1>
    <p>Connect is a auth & user management center for Koneksa.</p>
    <a href="/" class="text-white/70 underline">Visit www.koneksa.id</a>
  </div>
  <main class="col-span-2 lg:col-span-1 min-h-screen relative">
    <div
      class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand/10 md:from-brand/20 to-white"
    ></div>
    <div class="relative z-10">
      {@render children?.()}
    </div>
  </main>
</div>

<Footer {navigation} />
