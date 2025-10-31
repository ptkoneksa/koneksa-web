<script lang="ts">
  import BgGrid from "$lib/components/scenes/BgGrid.svelte";
  import Icon from "@iconify/svelte";
  import Finding from "$lib/assets/animation/finding.mp4";
  import Puzzle from "$lib/assets/animation/puzzle.mp4";

  let { data } = $props();
  let { talents } = data;
</script>

<svelte:head>
  <title>Konvy | Koneksa Environment</title>
  <meta
    name="description"
    content="Konvy is a talent agency platform with Koneksa Environment."
  />
  <meta
    name="keywords"
    content="Konvy, Koneksa Environment, Talent, Agency, Platform"
  />
  <meta name="author" content="PT Koneksi Kreatif Nusantara (Koneksa)" />
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Konvy | Koneksa Environment" />
  <meta
    property="twitter:description"
    content="Konvy is a talent agency platform with Koneksa Environment."
  />
  <meta property="twitter:image" content="/logo/konvy_logo_brand.png" />
  <!-- Facebook/Open Graph -->
  <meta property="og:title" content="Konvy | Koneksa Environment" />
  <meta
    property="og:description"
    content="Konvy is a talent agency platform with Koneksa Environment."
  />
  <meta property="og:image" content="/logo/konvy_logo_brand.png" />
  <meta property="og:url" content="https://koneksa.id/konvy" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Konvy | Koneksa Environment" />
</svelte:head>

<!-- Hero Section -->
<section id="hero" class="container mx-auto p-4 pb-24">
  <BgGrid isBottomMask={true}>
    <div class="h-[50vh] relative overflow-hidden p-4">
      <div
        class="grid grid-cols-1 lg:grid-cols-5 gap-4 justify-center items-center"
      >
        <div class="col-span-1"></div>
        <div class="col-span-2 card bg-brand aspect-square">
          <video
            src={Finding}
            autoplay
            loop
            muted
            class="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
          ></video>
        </div>
        <div
          class="col-span-1 card bg-accent aspect-square -translate-y-48 translate-x-32 scale-75 lg:translate-y-0 lg:translate-x-0 lg:scale-100"
        >
          <video
            src={Puzzle}
            autoplay
            loop
            muted
            class="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
          ></video>
        </div>
        <div class="col-span-1"></div>
      </div>
    </div>
  </BgGrid>

  <div class="-translate-y-16 px-8">
    <h1 class="text-4xl lg:text-8xl">
      a <span class="font-bold">bridge</span> that connects you with our talents
    </h1>
    <a href="#talents" class="block w-max">
      <button
        class="button lg:px-8 lg:py-4 text-base lg:text-lg flex items-center gap-2"
      >
        <Icon icon="mingcute:arrow-down-line" width="24" height="24" />
        <span>Discover Our Talents</span>
      </button>
    </a>
  </div>
</section>

<!-- About Section -->
<section
  id="about"
  class="min-h-[50vh] lg:mx-8 bg-accent rounded-tl-3xl rounded-br-3xl"
>
  <div
    class="container mx-auto p-8 pb-24 bg-white rounded-tl-3xl rounded-br-3xl -translate-y-12 drop-shadow-2xl"
  >
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="col-span-2">
        <h1 class="text-5xl tracking-tighter">
          Realize Your <span class="font-bold">Creative & Tech</span> Ideas
        </h1>
        <h2 class="text-5xl tracking-tighter">with Our Talents</h2>
        <p class="text-2xl text-justify">
          Our talents are not just creative and tech experts, they are also
          problem solvers. They are able to understand your needs and provide
          solutions that are tailored to your business.
        </p>
      </div>
      <div
        class="col-span-2 lg:col-span-1 bg-brand rounded-tl-3xl rounded-br-3xl p-8 lg:-translate-y-16 drop-shadow-2xl"
      >
        <img
          src="/logo/konvy_logo_white.png"
          alt="Konvy"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</section>

<!-- Talent Section -->
<section id="talents" class="container mx-auto p-4 pb-24 mt-8">
  <div>
    <h2 class="text-5xl tracking-tighter">Our Talents</h2>
  </div>
  {#if talents}
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"
    >
      {#each talents.items ?? [] as talent}
        <div
          class="card bg-brand aspect-square text-white relative overflow-hidden"
        >
          <img
            src="/background/konvy_background_loop.png"
            alt="Konvy Background"
            class="absolute top-0 left-0 w-full h-full object-cover"
          />
          {#if talent.imageUrl}
            <img
              src={talent.imageUrl}
              alt={talent.name}
              class="absolute top-0 left-0 w-full h-full object-cover"
            />
          {/if}
          <div
            class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent"
          >
            <h3>{talent.name}</h3>
            <p class="text-white/70 line-clamp-1">{talent.description}</p>
            <a href={`/konvy/talents/${talent.slug}`}>
              <button class="button mt-2">View Talent</button>
            </a>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-black/70 italic my-4">
      No talents found. Please check back later.
    </p>
  {/if}
</section>
