<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { children, data } = $props();

  const serviceInfo = {
    name: "Konvy",
    image: "/logo/konvy_logo_brand.png",
    link: "/konvy",
  };

  const navigation = [
    {
      label: "Home",
      href: "/konvy",
    },
    {
      label: "Talents",
      href: "/konvy#talents",
    },
    {
      label: "Teams",
      href: "/konvy/teams",
    },
  ];
</script>

<Navbar {serviceInfo} {navigation} {data} />

<main class="min-h-screen pt-20">
  <div class="relative z-10">
    {@render children?.()}
  </div>
</main>

<Footer {navigation} />
