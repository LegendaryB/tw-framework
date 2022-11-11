"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(id, name, points, rank, ally, villageCount) {
        this.id = id;
        this.name = name;
        this.points = points;
        this.rank = rank;
        this.ally = ally;
        this.villageCount = villageCount;
    }
}
exports.Player = Player;
