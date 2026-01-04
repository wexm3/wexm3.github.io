<script>
	import { onMount } from 'svelte';

	let currentTheme = $state('light');

	const themes = [
		'light',
		'dark',
		'luxury',
		'forest',
		'pastel',
		'black',
		'dracula',
		'dim',
		'nord',
		'sunset',
		'abyss',
		'caramellatte',
		'silk'
	];

	function getSystemTheme() {
		if (typeof window !== 'undefined') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		return 'light';
	}

	function applyTheme(theme) {
		if (typeof document !== 'undefined') {
			// Check if View Transitions API is supported
			if (document.startViewTransition) {
				document.startViewTransition(() => {
					document.documentElement.setAttribute('data-theme', theme);
				});
			} else {
				// Fallback for browsers without View Transitions
				document.documentElement.setAttribute('data-theme', theme);
			}
			localStorage.setItem('theme', theme);
			currentTheme = theme;
		}
	}

	function handleThemeChange(event) {
		const theme = event.target.value;
		applyTheme(theme);
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		const theme = savedTheme || getSystemTheme();
		currentTheme = theme;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemThemeChange = (e) => {
			if (!localStorage.getItem('theme')) {
				applyTheme(e.matches ? 'dark' : 'light');
			}
		};
		mediaQuery.addEventListener('change', handleSystemThemeChange);

		return () => {
			mediaQuery.removeEventListener('change', handleSystemThemeChange);
		};
	});
</script>

<div class="dropdown dropdown-end">
	<div tabindex="0" role="button" class="btn btn-ghost gap-1">
		Theme
		<svg
			width="12px"
			height="12px"
			class="inline-block h-2 w-2 fill-current opacity-60"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048">
			<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
		</svg>
	</div>
	<ul
		tabindex="0"
		class="dropdown-content bg-base-300 rounded-box z-50 w-52 p-2 shadow-2xl max-h-96 overflow-y-auto">
		{#each themes as theme}
			<li>
				<input
					type="radio"
					name="theme-dropdown"
					class="btn btn-sm btn-block btn-ghost justify-start"
					aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
					value={theme}
					checked={currentTheme === theme}
					onchange={handleThemeChange} />
			</li>
		{/each}
	</ul>
</div>
