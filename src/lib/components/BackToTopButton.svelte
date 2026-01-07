<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { threshold = 300 } = $props();
	let show = $state(false);

	function scrollToTop() {
		if (browser) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	onMount(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					show = window.scrollY > threshold;
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<button
	class="back-to-top"
	class:show
	onclick={scrollToTop}
	aria-label="Прокрутить наверх"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M5 10l7-7m0 0l7 7m-7-7v18"
		></path>
	</svg>
</button>

<style>
	.back-to-top {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		z-index: 50;

		/* Adaptive sizing */
		width: 3.5rem;
		height: 3.5rem;

		/* Modern styling */
		border: none;
		border-radius: 50%;
		background: oklch(var(--p));
		color: oklch(var(--pc));
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

		/* Animation & transitions */
		opacity: 0;
		transform: translateY(100px) scale(0.8);
		transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		pointer-events: none;

		/* Center icon */
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.back-to-top.show {
		opacity: 1;
		transform: translateY(0) scale(1);
		pointer-events: auto;
	}

	.back-to-top:hover {
		transform: translateY(-4px) scale(1.05);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	}

	.back-to-top:active {
		transform: translateY(-2px) scale(0.98);
	}

	.icon {
		width: 1.75rem;
		height: 1.75rem;
		transition: transform 0.2s ease;
	}

	.back-to-top:hover .icon {
		transform: translateY(-2px);
	}

	/* Desktop version - smaller and more subtle */
	@media (min-width: 1024px) {
		.back-to-top {
			width: 3rem;
			height: 3rem;
			bottom: 2rem;
			right: 2rem;
			box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
		}

		.icon {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	/* Extra large screens */
	@media (min-width: 1536px) {
		.back-to-top {
			bottom: 2.5rem;
			right: 2.5rem;
		}
	}
</style>
