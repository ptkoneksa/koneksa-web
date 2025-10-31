<script lang="ts">
  import Icon from "@iconify/svelte";

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

<div class="container mx-auto p-4 pb-24">
  <!-- Hero Section -->
  <section
    id="hero"
    class="min-h-[50vh] flex flex-col items-start justify-center"
  >
    <div class="flex items-center gap-2">
      <img src="/logo/koneksa_logo.png" alt="Koneksa" class="h-24" />
      <img src="/logo/konvy_logo_brand.png" alt="Konvy" class="h-24" />
    </div>
    <h1 class="text-brand tracking-tighter font-medium">
      Koneksa Environment Internal Team
    </h1>
    <h2>
      Konvy Team is a <span class="text-brand underline">internal team</span> that
      works for PT Koneksa.
    </h2>
    <a href="/konvy#talents">
      <button class="button mt-4 flex items-center gap-2">
        <Icon icon="mingcute:arrow-left-line" width="24" height="24" />
        <span>Back to Konvy Bridge</span>
      </button>
    </a>
  </section>

  <!-- Teams Section -->
  <section id="teams">
    <div>
      <h2>Konvy Team</h2>
      <p class="text-black/70">
        Some of them might be hidden and only visible to the internal team.
      </p>
    </div>

    <!-- List of Talents -->
    {#if teams}
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"
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
              class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent"
            >
              <h3>{team.name}</h3>
              <p class="text-white/70 line-clamp-1">
                {team.department} - {team.position}
              </p>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50"
            >
              <a href={`/konvy/teams/${team.slug}`}>
                <button class="button mt-2">View Profile</button>
              </a>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p class="text-black/70 italic my-4">
        No teams found. Please check back later.
      </p>
    {/if}
  </section>
</div>
