<script lang="ts">
	let { children } = $props();
</script>

<nav class="w-full bg-brand backdrop-blur-sm absolute top-0 left-0 right-0 z-10">
	<div class="container mx-auto p-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<a href="/" class="text-2xl font-bold text-white">
					<img src="/logo/koneksa_logo.png" alt="Koneksa" class="h-10 brightness-0 invert" />
				</a>
				<a href="/konvy" class="text-2xl font-bold text-white">
					<img src="/logo/konvy_logo_white.png" alt="Konvy" class="h-10" />
				</a>
			</div>

			<!-- Navigation -->
			<div class="flex items-center gap-4 uppercase">
				<a href="/" class="font-medium text-white hover:text-gray-200">
					Home
				</a>
			</div>
		</div>
	</div>
</nav>

<main class="bg-gradient-to-t from-brand/50 to-white text-black min-h-screen pt-20">
	{@render children?.()}
</main>

