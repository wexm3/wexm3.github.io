<script>
	let {
		width = '100%',
		height = '1rem',
		circle = false,
		class: customClass = ''
	} = $props();
</script>

<div
	class="skeleton {circle ? 'rounded-full' : 'rounded-lg'} {customClass}"
	style="width: {width}; height: {height};"
></div>

<style>
	.skeleton {
		background: linear-gradient(
			90deg,
			oklch(var(--b2) / 0.3) 0%,
			oklch(var(--b2) / 0.5) 50%,
			oklch(var(--b2) / 0.3) 100%
		);
		background-size: 200% 100%;
		animation: shimmer 1.5s ease-in-out infinite;
	}

	@keyframes shimmer {
		0% {
			background-position: -200% 0;
		}
		100% {
			background-position: 200% 0;
		}
	}
</style>
