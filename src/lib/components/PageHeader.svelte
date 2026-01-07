<script>
	let {
		title,
		description = '',
		align = 'left', // 'left', 'center'
		size = 'default', // 'small', 'default', 'large'
		class: customClass = ''
	} = $props();

	const alignClasses = {
		left: 'text-left',
		center: 'text-center'
	};

	const titleSizes = {
		small: 'text-2xl sm:text-3xl',
		default: 'text-3xl sm:text-4xl',
		large: 'text-4xl sm:text-5xl lg:text-6xl'
	};
</script>

<div class="page-header mb-8 sm:mb-12 {alignClasses[align]} {customClass}">
	<h1 class="font-bold {titleSizes[size]} mb-3 text-base-content">
		{title}
	</h1>
	{#if description}
		<p class="text-base-content/70 text-base sm:text-lg max-w-2xl {align === 'center' ? 'mx-auto' : ''}">
			{description}
		</p>
	{/if}
</div>

<style>
	.page-header {
		animation: slideDown 0.4s ease-out;
	}

	h1 {
		line-height: 1.2;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
