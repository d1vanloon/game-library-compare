import type IGame from "./IGame";

export default class Game implements IGame {
    id: string;
    name: string;
    description: string;
}
