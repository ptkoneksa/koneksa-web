<script lang="ts">
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Icon from "@iconify/svelte";
  import type { HTMLImgAttributes } from "svelte/elements";

  let { data } = $props();

  const productsAndServicesImages: HTMLImgAttributes[] =
    data.productAndServices.map((product) => ({
      src: product.image,
      alt: product.name,
      title: product.name,
    }));
</script>

<svelte:head>
  <title>Koneksa | Connect Together, Made Simple.</title>
  <meta
    name="description"
    content="Koneksa is a central hub for all Koneksa services."
  />
  <meta name="keywords" content="Koneksa, Connect, Together, Made, Simple" />
  <meta name="author" content="PT Koneksi Kreatif Nusantara (Koneksa)" />
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:title"
    content="Koneksa | Connect Together, Made Simple."
  />
  <meta
    property="twitter:description"
    content="Koneksa is a central hub for all Koneksa services."
  />
  <meta property="twitter:image" content="/logo/koneksa_logotype.png" />
  <!-- Facebook/Open Graph -->
  <meta
    property="og:title"
    content="Koneksa | Connect Together, Made Simple."
  />
  <meta
    property="og:description"
    content="Koneksa is a central hub for all Koneksa services."
  />
  <meta property="og:image" content="/logo/koneksa_logotype.png" />
  <meta property="og:url" content="https://koneksa.id" />
  <meta property="og:type" content="website" />
</svelte:head>

<!-- Hero Section -->
<section id="hero" class="container mx-auto p-4 pb-24">
  <div class="flex flex-col items-center justify-center gap-x-2 min-h-[50vh]">
    <span class="flex items-center gap-x-2 flex-wrap w-full md:w-max">
      <h1 class="text-6xl lg:text-8xl font-bold tracking-tighter">with</h1>
      <span
        class="bg-brand rounded-tl-2xl rounded-br-2xl lg:rounded-tl-4xl lg:rounded-br-4xl px-4 lg:px-8 py-2 lg:py-4"
      >
        <img
          src="/logo/koneksa_logotype.png"
          alt="Koneksa"
          class="h-8 lg:h-24 brightness-0 invert"
        />
      </span>
    </span>
    <h1
      class="text-6xl lg:text-8xl text-start md:text-center tracking-tighter font-semibold text-wrap"
    >
      <img
        src="/logo/connect_logotype.png"
        alt="Koneksa"
        class="h-16 lg:h-28 inline align-middle"
      />
      <span class="align-middle">together, made simple.</span>
    </h1>
  </div>
</section>

<!-- Konvy Section -->
<section
  id="konvy"
  class="bg-[url('/background/konvy_background_loop.png')] bg-cover bg-center min-h-[50vh]"
>
  <div class="container mx-auto p-4 -translate-y-12 relative z-10 group">
    <div class="bg-white rounded-tl-3xl rounded-br-3xl drop-shadow-2xl p-8">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 lg:col-span-2">
          <h2 class="text-3xl lg:text-5xl font-bold tracking-tighter">
            Hire creative digital talents
          </h2>
          <h3 class="text-xl lg:text-3xl">
            Konvy is a talent agency platform with Koneksa Environment. A bridge
            that connects you with our talents.
          </h3>
        </div>
        <a
          href="/konvy"
          class="col-span-3 lg:col-span-1 bg-accent/10 group-hover:bg-brand/10 transition-all duration-300 rounded-tl-3xl rounded-br-3xl px-16 py-8 aspect-video"
        >
          <img
            src="/logo/konvy_logo_brand.png"
            alt="Konvy"
            class="h-full object-contain mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </a>
      </div>
    </div>
    <div class="flex items-center justify-start gap-2 mt-4 flex-wrap">
      <a href="/konvy">
        <button class="button bg-white text-brand">
          <span>Hire Talent</span>
        </button>
      </a>
      <span class="text-white">or</span>
      <a href="/konvy/teams">
        <button class="button bg-white/10">
          <span>View Our Internal Teams</span>
        </button>
      </a>
    </div>
  </div>
</section>

<!-- Other Products & Services Section -->
<section id="products-services" class="min-h-[50vh] px-4 md:px-16 pb-24">
  <div
    class="bg-white rounded-tl-3xl rounded-br-3xl p-0 md:p-8 -translate-y-12"
  >
    <div class="container mx-auto rounded-tl-3xl rounded-br-3xl p-8">
      <h2 class="text-3xl lg:text-5xl font-bold tracking-tighter">
        Our Products & Services
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {#each data.productAndServices as product}
          <a
            href={product.link}
            target={product.target}
            class="p-8 bg-white border border-brand/10 hover:bg-brand/5 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              class="h-16 mx-auto object-contain"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- Details -->
  <div class="container mx-auto p-4">
    <div class="space-y-16">
      {#each data.productAndServices as product, index}
        {@const remainder = index % 2}
        {#if remainder === 0 || remainder === 3}
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 relative items-center"
          >
            <div
              class="col-span-1 w-full aspect-square bg-accent/10 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl p-8"
            >
              <img
                src={product.image}
                alt={product.name}
                class="w-full h-full object-contain"
              />
            </div>
            <div class="col-span-2 sticky top-0 h-fit">
              <h1 class="text-3xl lg:text-7xl font-bold tracking-tighter">
                {product.name}
              </h1>
              <h3 class="text-xl lg:text-3xl">{product.description}</h3>
              <a
                href={product.link}
                target={product.target}
                class="button block w-max mt-2"
              >
                <span>View {product.name}</span>
              </a>
            </div>
          </div>
        {:else}
          <div
            class="flex flex-col-reverse md:grid md:grid-cols-3 gap-4 relative items-center"
          >
            <div class="col-span-2 sticky top-0 h-fit">
              <h1 class="text-3xl lg:text-7xl font-bold tracking-tighter">
                {product.name}
              </h1>
              <h3 class="text-xl lg:text-3xl">{product.description}</h3>
              <a
                href={product.link}
                target={product.target}
                class="button block w-max mt-2"
              >
                <span>View {product.name}</span>
              </a>
            </div>
            <div
              class="col-span-1 w-full aspect-square bg-accent/10 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl p-8"
            >
              <img
                src={product.image}
                alt={product.name}
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="min-h-[50vh] px-4 md:px-16 pb-24">
  <div class="container mx-auto p-4">
    <h2 class="text-3xl lg:text-5xl font-bold tracking-tighter">Contact Us</h2>
    <p class="text-xl lg:text-3xl">
      Have any questions or feedback? We'd love to hear from you!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <ContactForm />
    </div>
  </div>
</section>
