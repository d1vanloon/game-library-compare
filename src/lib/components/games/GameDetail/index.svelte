<script lang="ts">
	import type IGame from '$lib/models/IGame';

	export let game: IGame;
</script>

<label>
    Name:
    <input type="text" bind:value={game.name}>
</label>

<label>
    Description:
    <textarea bind:value={game.description}></textarea>
</label>
