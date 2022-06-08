import { fetchEndpoint } from "./fetch";
import { parseXML } from "./parser";

const UNIT_INFO_URL = 'interface.php?func=get_unit_info';
const BUILDING_INFO_URL = 'interface.php?func=get_building_info';

export class World {
    constructor(unitInfo, buildingInfo) {
        this.world = game_data.world;
        this.UnitInfo = unitInfo;
        this.BuildingInfo = buildingInfo;
    }

    static async load() {
        let unitInfo = await this.#loadInfo(UNIT_INFO_URL);
        let buildingInfo = await this.#loadInfo(BUILDING_INFO_URL);
        
        return new World(unitInfo, buildingInfo);
    }

    static async #loadInfo(infoURL) {
        let data = await fetchEndpoint(infoURL);
        return parseXML(data);
    }
}