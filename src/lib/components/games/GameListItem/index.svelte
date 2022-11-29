<script lang="ts">
	import type IGame from '$lib/models/IGame';

	export let game: IGame;
</script>

<span>
    <a href="games/{game.id}">
        {game.name}
    </a>
</span>
