<script>
	let { items = [] } = $props();
</script>

<div class="breadcrumbs text-sm">
	<ul>
		{#each items as item, index}
			<li>
				{#if index === items.length - 1}
					<span class="font-semibold">{item.label}</span>
				{:else}
					<a href={item.path} class="link link-hover">{item.label}</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>
