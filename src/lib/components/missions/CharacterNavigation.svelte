<script>
	import { browser } from '$app/environment';

	let { characters, missionsByCharacter, onImageError } = $props();

	let hasAnyMissions = $derived(
		characters.some((char) => missionsByCharacter[char.id]?.length > 0)
	);

	function scrollToCharacter(characterId) {
		if (browser) {
			const element = document.getElementById(`char-${characterId}`);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}
</script>

{#if hasAnyMissions}
	<div class="mb-8">
		<h2 class="mb-3 text-sm font-semibold opacity-70 lg:text-base">Jump to Character</h2>
		<div class="flex flex-wrap gap-2">
			{#each characters as char}
				{#if missionsByCharacter[char.id]?.length > 0}
					<button class="btn btn-outline btn-xs sm:btn-sm" onclick={() => scrollToCharacter(char.id)}>
						<img
							src={char.avatar}
							alt={char.name}
							class="h-5 w-5 rounded-full object-cover"
							onerror={onImageError}
						/>
						<span class="hidden sm:inline">{char.name}</span>
						<span class="sm:hidden">{char.name.split(' ')[0]}</span>
					</button>
				{/if}
			{/each}
		</div>
	</div>
{/if}
