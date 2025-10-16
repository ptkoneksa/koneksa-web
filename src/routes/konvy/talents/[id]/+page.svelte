<script lang="ts">
  let { id } = $props();

  const talent = {
    name: 'Talent 1',
    slug: 'talent-1',
    image: '/logo/konvy_logo_black.png',
    description: 'A talent is a person who is talented.',
  }
</script>

<div class="container mx-auto p-4 pb-24">
  <!-- Profile -->
   <section id="profile" class="min-h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="card bg-brand aspect-square text-white relative overflow-hidden">
      <img src="/background/konvy_background_loop.png" alt="Konvy Background" class="absolute top-0 left-0 w-full h-full object-cover">
      <img src={talent.image} alt={talent.name} class="absolute top-0 left-0 w-full h-full object-contain">
    </div>

    <div class="col-span-1 lg:col-span-2">
      <h1 class="text-brand tracking-tighter font-medium">{talent.name}</h1>
      <h3>{talent.description}</h3>
    </div>
   </section>
</div>