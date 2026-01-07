<script>
	let {
		src,
		alt,
		width,
		height,
		class: customClass = '',
		eager = false,
		...rest
	} = $props();
</script>

<img
	{src}
	{alt}
	{width}
	{height}
	loading={eager ? 'eager' : 'lazy'}
	decoding="async"
	class={customClass}
	{...rest}
/>
