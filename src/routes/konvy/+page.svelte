<script lang="ts">
  let { data } = $props();
  let { talents } = data;
</script>

<div class="container mx-auto p-4 pb-24">
  <!-- Hero Section -->
  <section
    id="hero"
    class="min-h-[50vh] flex flex-col items-center justify-center"
  >
    <img src="/logo/konvy_logo_brand.png" alt="Konvy" class="h-24" />
    <h1 class="text-brand tracking-tighter font-medium">Koneksa Environment</h1>
    <h2>
      Konvy is a <span class="text-brand underline">talent agency</span> platform
      with Koneksa Environment.
    </h2>
    <a href="#talents">
      <button class="button mt-4">Find & Hire Talent</button>
    </a>
  </section>

  <!-- Talents Section -->
  <section id="talents">
    <div class="text-center">
      <h2>Konvy Bridge</h2>
      <p>
        a bridge that connects you with <img
          src="/logo/konvy_logo_black.png"
          alt="Koneksa Environment"
          class="h-6 inline-block"
        /> talents.
      </p>
      <p>
        Showing you {talents?.totalItems ?? 0} featured talents.
        <a href="/konvy/talents" class="text-brand underline">Click here</a> to view
        all talents.
      </p>
    </div>

    <!-- List of Talents -->
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
      <p class="text-black/70 text-center italic my-4">
        No talents found. Please check back later.
      </p>
    {/if}

    <div class="mt-8 w-max mx-auto text-center">
      <p class="text-black/70 italic">~ Maybe not what you're looking for? ~</p>
      <a href="/konvy/talents">
        <button class="button mt-2">View All Talents</button>
      </a>
    </div>
  </section>
</div>
