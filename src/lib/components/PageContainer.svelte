<script>
	let {
		children,
		maxWidth = 'default', // 'default', 'wide', 'full', 'narrow'
		noPadding = false,
		class: customClass = ''
	} = $props();

	const maxWidthClasses = {
		narrow: 'max-w-3xl',
		default: 'max-w-6xl',
		wide: 'max-w-7xl',
		full: 'max-w-none'
	};
</script>

<div
	class="page-container {noPadding ? '' : 'px-4 py-6 sm:py-8'} mx-auto {maxWidthClasses[
		maxWidth
	]} {customClass}"
>
	{@render children()}
</div>

<style>
	.page-container {
		animation: fadeIn 0.3s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
