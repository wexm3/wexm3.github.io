<script>
	import ThemeSelector from './ThemeSelector.svelte';

	let { children } = $props();
	let drawerOpen = $state(false);

	function toggleDrawer() {
		drawerOpen = !drawerOpen;
	}

	function closeDrawer() {
		drawerOpen = false;
	}
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />
	<div class="drawer-content">
		<div class="navbar bg-base-100 shadow-sm">
			<div class="flex-none lg:hidden">
				<label for="my-drawer" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-5 w-5 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div class="flex-1">
				<a href="/" class="btn btn-ghost text-xl gap-2">
					<img src="/images/logo.webp" alt="wexm3 logo" class="h-10 w-auto" />
					<span style="font-family: 'Asimovian', sans-serif;">wexm3</span>
				</a>
			</div>
			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal px-1">
					<li><a href="/abi">Arena Breakout: Infinite</a></li>
				</ul>
			</div>
			<div class="flex-none">
				<ThemeSelector />
			</div>
		</div>
		{@render children()}
	</div>
	<div class="drawer-side z-50">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-100 text-base-content min-h-full w-80 p-4">
			<li><a href="/abi" onclick={closeDrawer}>Arena Breakout: Infinite</a></li>
		</ul>
	</div>
</div>
