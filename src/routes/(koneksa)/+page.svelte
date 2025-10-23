<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { HTMLImgAttributes } from "svelte/elements";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";

  let { data } = $props();

  const productsAndServicesImages: HTMLImgAttributes[] =
    data.productAndServices.map((product) => ({
      src: product.image,
      alt: product.name,
      title: product.name,
    }));
</script>

<div class="container mx-auto p-4 pb-24">
  <!-- Hero Section -->
  <section
    id="hero"
    class="min-h-[50vh] flex flex-col items-center justify-center"
  >
    <img src="/logo/koneksa_logotype.png" alt="Koneksa" class="h-24" />
    <h1 class="text-brand tracking-tighter font-medium">
      Connect Together, Made Simple.
    </h1>
    <h2 class="flex items-center gap-2">
      Central hub for all <img
        src="/logo/koneksa_logotype.png"
        alt="Koneksa"
        class="h-10 inline-block brightness-0 opacity-70"
      />
      services.
    </h2>
    <span class="text-black/70 text-sm"
      >PT Koneksi Kreatif Nusantara (Koneksa)</span
    >
    <a
      href="#products-services"
      class="flex items-center gap-2 p-4 underline text-brand"
    >
      <Icon
        icon="mingcute:arrows-down-fill"
        width="24"
        height="24"
        class="animate-pulse"
      />
      <span>Discover Our Products & Services</span>
    </a>
  </section>

  <!-- Products & Services Section -->
  <section id="products-services">
    <div class="text-center">
      <h2>Our Products & Services</h2>
    </div>
    <div class="mt-4 mx-auto">
      <div
        class="overflow-hidden"
        use:emblaCarouselSvelte={{
          options: {
            loop: true,
          },
          plugins: [Autoplay({ delay: 5000 })],
        }}
      >
        <div class="flex">
          {#each data.productAndServices as product}
            <div
              class="flex-[0_0_95%] ml-8 card w-full max-w-xl h-max border-2 border-b-4 border-brand"
            >
              <img
                src={product.image}
                alt={product.name}
                class="h-10 object-contain"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a
                href={product.link}
                target="_blank"
                class="text-brand underline">View {product.name}</a
              >
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <hr class="my-8 border-2 border-black/10" />

  <!-- Sign Up Section -->
  <section id="sign-up" class="mt-8">
    <div class="text-center flex flex-col items-center">
      <h1>Ready to Connect?</h1>
      <h2 class="text-black/70">
        Manage your accounts, access all services, and enjoy a seamless
        experience.
      </h2>
      <a href="/auth">
        <button class="button flex items-center gap-2 mt-4">
          <Icon icon="mingcute:arrow-right-line" width="24" height="24" />
          <span>Sign Up Now</span>
        </button>
      </a>
    </div>
  </section>
</div>
