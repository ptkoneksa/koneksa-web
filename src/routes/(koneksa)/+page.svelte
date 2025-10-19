<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";
  import { Carousel } from "flowbite-svelte";
  import type { HTMLImgAttributes } from "svelte/elements";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";

  const productsAndServices = [
    {
      name: "Konvy",
      description: "A bridge that connects you with our talents.",
      image: "/logo/konvy_logo_brand.png",
      link: "/konvy",
    },
    {
      name: "Tipspace",
      description:
        "Beri dukungan, bangun koneksi di Tipspace. Tempat untuk berbagi dukungan, kontribusi, dan apresiasi pada kreator favorit Anda.",
      image: "/logo/tipspace_logo.png",
      link: "https://tipspace.org",
    },
    {
      name: "Kopi Koneksa",
      description:
        "Sebagai wadah untuk saling terhubung dan berbagi cerita. Kami percaya, setiap cangkir kopi punya cerita, dan kami tak sabar untuk mendengar cerita kamu bersama teman, pasangan, atau keluarga di Kopi Koneksa. Mari kita nikmati perjalanan rasa kopi ini bersama-sama. Sampai jumpa di outlet kami!",
      image: "/logo/kopi_koneksa_logotype.png",
      link: "https://kopi.koneksa.id",
    },
    {
      name: "GSalt",
      description:
        "Global Koneksa Loyalty Token (GSalt) is a loyalty token that can be used to redeem rewards and discounts at Koneksa.",
      image: "/logo/gsalt_coin_logo.png",
      link: "https://koneksa.id/gsalt",
    },
    {
      name: "Blockstuff",
      description:
        "Blockstuff is a marketplace platform for buying Minecraft server items.",
      image: "/logo/blockstuff_logotype.png",
      link: "https://bstuff.top",
    },
  ];

  const productsAndServicesImages: HTMLImgAttributes[] =
    productsAndServices.map((product) => ({
      src: product.image,
      alt: product.name,
      title: product.name,
    }));

  let showDetailProductsAndServices = false;
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
    <div class="mt-4 w-full max-w-screen-sm mx-auto">
      <div
        class="overflow-hidden"
        use:emblaCarouselSvelte={{
          options: {
            loop: true,
            duration: 100,
          },
          plugins: [Autoplay({ delay: 2000 })],
        }}
      >
        <div class="flex">
          {#each productsAndServices as product}
            <div class="flex-[0_0_50%]">
              <img
                src={product.image}
                alt={product.name}
                class="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="mt-4">
      <button
        class="button mx-auto bg-transparent border border-black/70 text-black/70 flex items-center gap-2"
        onclick={() =>
          (showDetailProductsAndServices = !showDetailProductsAndServices)}
        aria-expanded={showDetailProductsAndServices}
      >
        <Icon
          icon={showDetailProductsAndServices
            ? "mingcute:arrows-up-fill"
            : "mingcute:arrows-down-fill"}
          width="24"
          height="24"
          class={showDetailProductsAndServices ? "animate-pulse" : ""}
        />
        <span
          >{showDetailProductsAndServices
            ? "Read less details"
            : "Read more details"}</span
        >
      </button>
      {#if showDetailProductsAndServices}
        <div
          in:fly={{ y: -10 }}
          out:fly={{ y: -10 }}
          class="border border-black/70 rounded-tl-3xl rounded-br-3xl p-4 w-full max-w-screen-lg mx-auto"
        >
          {#each productsAndServices as product}
            <div class="card">
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
      {/if}
    </div>
  </section>
</div>
