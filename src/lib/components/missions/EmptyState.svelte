<script>
	let { message = 'No missions in this block', icon = '🎯' } = $props();
</script>

<div class="flex min-h-[400px] items-center justify-center">
	<div class="text-center">
		<div class="text-6xl opacity-20">{icon}</div>
		<h3 class="mt-4 text-xl font-semibold">{message}</h3>
		<p class="mt-2 text-sm opacity-70">Try selecting a different mission block</p>
	</div>
</div>
