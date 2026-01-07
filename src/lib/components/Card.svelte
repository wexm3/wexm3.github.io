<script>
	let {
		href = '',
		icon = '',
		title,
		description = '',
		children,
		onclick,
		class: customClass = ''
	} = $props();
</script>

{#if href}
	<a
		{href}
		class="card bg-base-200 border border-base-300 cursor-pointer transition-all duration-300 hover:bg-base-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 {customClass}"
		data-sveltekit-preload-data="tap"
		data-sveltekit-preload-code="tap"
	>
		<div class="card-body items-center text-center">
			{#if icon}
				<div class="text-4xl mb-3">{icon}</div>
			{/if}
			{#if children}
				{@render children()}
			{:else}
				<h2 class="card-title">{title}</h2>
				{#if description}
					<p class="text-base-content/70 text-sm">{description}</p>
				{/if}
			{/if}
		</div>
	</a>
{:else}
	<div
		class="card bg-base-200 border border-base-300 cursor-pointer transition-all duration-300 hover:bg-base-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 {customClass}"
		role={onclick ? 'button' : undefined}
		{onclick}
	>
		<div class="card-body items-center text-center">
			{#if icon}
				<div class="text-4xl mb-3">{icon}</div>
			{/if}
			{#if children}
				{@render children()}
			{:else}
				<h2 class="card-title">{title}</h2>
				{#if description}
					<p class="text-base-content/70 text-sm">{description}</p>
				{/if}
			{/if}
		</div>
	</div>
{/if}
