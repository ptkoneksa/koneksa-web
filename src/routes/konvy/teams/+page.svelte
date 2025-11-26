<script lang="ts">
  import BgGrid from "$lib/components/scenes/BgGrid.svelte";

  let { data } = $props();
  let { teams } = data;
</script>

<svelte:head>
  <title>Konvy Teams | Koneksa Environment</title>
  <meta
    name="description"
    content="Konvy Teams is a internal team that works for PT Koneksa."
  />
  <meta
    name="keywords"
    content="Konvy Teams, Koneksa Environment, Internal Team"
  />
  <meta name="author" content="PT Koneksi Kreatif Nusantara (Koneksa)" />
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Konvy Teams | Koneksa Environment" />
  <meta
    property="twitter:description"
    content="Konvy Teams is a internal team that works for PT Koneksa."
  />
  <meta property="twitter:image" content="/logo/konvy_logo_brand.png" />
  <!-- Facebook/Open Graph -->
  <meta property="og:title" content="Konvy Teams | Koneksa Environment" />
  <meta
    property="og:description"
    content="Konvy Teams is a internal team that works for PT Koneksa."
  />
  <meta property="og:image" content="/logo/konvy_logo_brand.png" />
  <meta property="og:url" content="https://konvy.koneksa.id/teams" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Konvy Teams | Koneksa Environment" />
</svelte:head>

<!-- Hero Section -->
<section id="hero" class="container mx-auto p-4 pb-24">
  <BgGrid isBottomMask={true}>
    <div class="h-[50vh] relative overflow-hidden p-4"></div>
  </BgGrid>

  <div class="-translate-y-16 px-8">
    <h1 class="text-4xl lg:text-8xl">
      meet our <span class="font-bold">internal teams</span>
    </h1>
    <h2 class="text-3xl">
      We are building a better future <span class="font-medium">together</span>
    </h2>
  </div>
</section>

<!-- Teams Section -->
<section
  id="teams"
  class="bg-[url('/background/konvy_background_loop.png')] bg-cover bg-center p-8 mb-24"
>
  <div class="container mx-auto">
    <!-- List of Talents -->
    {#if teams}
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-16 gap-y-8 mt-4"
      >
        {#each teams.items ?? [] as team}
          <div
            class="card group bg-brand aspect-square text-white relative overflow-hidden"
          >
            <img
              src="/background/konvy_background_loop.png"
              alt="Konvy Background"
              class="absolute top-0 left-0 w-full h-full object-cover"
            />
            {#if team.imageUrl}
              <img
                src={team.imageUrl}
                alt={team.name}
                class="absolute top-0 left-0 w-full h-full object-cover object-bottom"
              />
            {/if}
            <div
              class="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent"
            >
              <h3 class="text-xs md:text-base truncate">{team.name}</h3>
              <p class="text-xs md:text-base text-white/70 line-clamp-1">
                {team.department} - {team.position}
              </p>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p class="text-black/70 italic my-4">
        No teams found. Please check back later.
      </p>
    {/if}
  </div>
</section>
