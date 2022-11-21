export class Ally {
    id: number;
    name: string;
    tag: string;
    playerCount: number;
    points: number;
    rank: number;
    bashpoints: number;
    bashpointsRank: number;

    constructor(id: number, name: string, tag: string, playerCount: number, points: number, rank: number, bashpoints: number, bashpointsRank: number) {
        this.id = id;
        this.name = name;
        this.tag = tag;
        this.playerCount = playerCount;
        this.points = points;
        this.rank = rank;
        this.bashpoints = bashpoints;
        this.bashpointsRank = bashpointsRank;
    }
}