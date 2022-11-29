import type Game from "$lib/models/Game";
import type IGame from "$lib/models/IGame";
import { autoInjectable } from "tsyringe";
import type IGamesRepository from "./IGamesRepository";

@autoInjectable()
export class GamesRepository implements IGamesRepository {
    /**
     * The mock games object.
     */
    games: Game[] = [
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

    async getGames(): Promise<IGame[]> {
        return this.games;
    }
    async getGame(gameId: string): Promise<IGame> {
        return this.games.find(game => game.id === gameId);
    }
    async createGame(game: IGame): Promise<IGame> {
        this.games.push(game);
        return game;
    }
    async updateGame(game: IGame): Promise<IGame> {
        const index = this.games.findIndex(g => g.id === game.id);
        if (index > -1) {
            this.games[index] = game;
        }
        return game;
    }

    async deleteGame(id: number): Promise<void> {
        const index = this.games.findIndex(g => g.id === id);
        if (index > -1) {
            this.games.splice(index, 1);
        }
    }
}
