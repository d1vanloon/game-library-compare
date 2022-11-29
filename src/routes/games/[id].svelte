<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    import type Game from '$lib/models/Game';

    export const load: Load = async ({ page, fetch, session, context }) => {
        return {
            props: {
                game: [].find(p => p.id === Number(page.params.id))
            }
        };
    }
</script>

<script lang="ts">
    import GameDetail from '$lib/components/games/GameDetail/index.svelte';

    export let game: Game;
</script>

<h1>Game</h1>

<GameDetail {game} />
