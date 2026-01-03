<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/abi/settings', { replaceState: true });
	});
</script>
