import type IGame from "$lib/models/IGame";

export default interface IGamesRepository {
    /**
     * Gets all games.
     */
    getGames(): Promise<Array<IGame>>;

    /**
     * Gets a game by its ID.
     */
    getGame(gameId: string): Promise<IGame>;

    /**
     * Creates a new game.
     */
    createGame(game: IGame): Promise<IGame>;

    /**
     * Updates a game.
     */
    updateGame(game: IGame): Promise<IGame>;

    /**
     * Deletes a game.
     */
    deleteGame(id: number): Promise<void>;
}
