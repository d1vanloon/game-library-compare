<script lang="ts">
    import GameListItem from '$lib/components/games/GameListItem/index.svelte';
    import type IGame from '$lib/models/IGame';

    let games: IGame[] = [
        {
            id: '1',
            name: 'A game',
            description: 'A game description',
        },
        {
            id: '2',
            name: 'Another game',
            description: 'Another game description',
        },
        {
            id: '3',
            name: 'Yet another game',
            description: 'Yet another game description',
        }
    ];
</script>

Games list

<ul>
    {#each games as game}
        <li>
            <GameListItem game={game}/>
        </li>
    {/each}
</ul>
