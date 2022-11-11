export class Player {
    id: number;
    name: string;
    points: number;
    rank: number;
    ally: number;
    villageCount: number;

    constructor(id: number, name: string, points: number, rank: number, ally: number, villageCount: number) {
        this.id = id;
        this.name = name;
        this.points = points;
        this.rank = rank;
        this.ally = ally;
        this.villageCount = villageCount;
    }
}