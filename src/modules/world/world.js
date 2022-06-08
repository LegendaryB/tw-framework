import { BuildingInfo } from "./building_info";
import { UnitInfo } from "./unit_info";

export class World {
    constructor(unitInfo, buildingInfo) {
        this.world = game_data.world;
        this.UnitInfo = unitInfo;
        this.BuildingInfo = buildingInfo;
    }

    static async load() {
        let unitInfo = await UnitInfo.load();
        let buildingInfo = await BuildingInfo.load();
        
        return new World(unitInfo, buildingInfo);
    }
}