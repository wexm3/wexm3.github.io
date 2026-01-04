<script>
	let { mission, isLastViewed = false, onclick } = $props();
</script>

<button
	class="card card-compact w-full shadow-sm transition-all hover:shadow-md active:scale-95 lg:w-64"
	class:bg-base-200={!isLastViewed}
	class:hover:bg-base-300={!isLastViewed}
	class:bg-base-300={isLastViewed}
	class:shadow-lg={isLastViewed}
	class:ring-1={isLastViewed}
	class:ring-primary={isLastViewed}
	{onclick}
>
	<div class="card-body">
		<h4 class="card-title text-sm">{mission.title}</h4>
		<p class="text-xs opacity-70">
			{mission.objectives.length}
			{mission.objectives.length === 1 ? 'objective' : 'objectives'}
		</p>
		<div class="card-actions mt-1">
			<div class="badge badge-xs badge-primary">
				{mission.rewards.xp} XP
			</div>
			<div class="badge badge-xs badge-accent">
				{mission.rewards.koen} K
			</div>
		</div>
	</div>
</button>
