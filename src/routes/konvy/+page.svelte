<script lang="ts">
  const talents = [
    {
      name: 'Talent 1',
      slug: 'talent-1',
      image: '/logo/konvy_logo_black.png',
      description: 'A talent is a person who is talented.',
    },
    {
      name: 'Talent 2',
      slug: 'talent-2',
      image: '/logo/konvy_logo_white.png',
      description: 'A talent is a person who is talented.',
    },
    {
      name: 'Talent 3',
      slug: 'talent-3',
      image: '/logo/konvy_logo_brand.png',
      description: 'A talent is a person who is talented.',
    },
    {
      name: 'Talent 4',
      slug: 'talent-4',
      image: '/logo/koneksa_logo.png',
      description: 'A talent is a person who is talented.',
    },
    {
      name: 'Talent 5',
      slug: 'talent-5',
      image: '/logo/koneksa_logotype.png',
      description: 'A talent is a person who is talented.',
    },
  ];
</script>

<div class="container mx-auto p-4 pb-24">
  <!-- Hero Section -->
   <section id="hero" class="min-h-[50vh] flex flex-col items-center justify-center">
     <img src="/logo/konvy_logo_brand.png" alt="Konvy" class="h-24">
     <h1 class="text-brand tracking-tighter font-medium">Koneksa Environment</h1>
     <h2>Konvy is a <span class="text-brand underline">talent agency</span> platform with Koneksa Environment.</h2>
     <a href="#talents">
       <button class="mt-4">Find & Hire Talent</button>
     </a>
   </section>

   <!-- Talents Section -->
   <section id="talents">
    <div class="text-center">
      <h2>Konvy Bridge</h2>
      <p>a bridge that connects you with <img src="/logo/konvy_logo_black.png" alt="Koneksa Environment" class="h-6 inline-block"> talents.</p>
      <p>Showing you featured talents. <a href="/konvy/talents" class="text-brand underline">Click here</a> to view all talents.</p>
    </div>

     <!-- List of Talents -->
     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {#each talents as talent}
        <div class="card bg-brand aspect-square text-white relative overflow-hidden">
          <img src="/background/konvy_background_loop.png" alt="Konvy Background" class="absolute top-0 left-0 w-full h-full object-cover">
          <img src={talent.image} alt={talent.name} class="absolute top-0 left-0 w-full h-full object-contain">
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
            <h3>{talent.name}</h3>
            <p>{talent.description}</p>
            <a href={`/konvy/talents/${talent.slug}`}>
              <button>View Talent</button>
            </a>
          </div>
        </div>
        {/each}
     </div>

     <div class="mt-8 w-max mx-auto text-center">
      <p class="text-black/70 italic">~ Maybe not what you're looking for? ~</p>
       <a href="/konvy/talents">
         <button class="mt-2">View All Talents</button>
       </a>
     </div>
   </section>
</div>