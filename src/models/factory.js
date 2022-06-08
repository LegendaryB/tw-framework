import { Ally } from "./ally";
import { Player } from "./player";

export class ModelFactory {
    static createAlly(id, name, tag, playerCount, points, rank, bashpoints, bashpointsRank) {
        return new Ally(
            id, name, tag, playerCount, points, rank, bashpoints, bashpointsRank
        );
    }

    static createPlayer(id, name, points, rank, ally, villageCount) {
        return new Player(
            id, name, points, rank, ally, villageCount
        );
    }
}