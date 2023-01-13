import { WorldConfiguration } from './WorldConfiguration';
import { BuildingInfoKeys, BuildingInfo } from './BuildingInfo';
import { UnitInfoKeys, UnitInfo } from './UnitInfo';

import { Storage } from '../storage';
import { xmlToJson } from './xmlToJson';

const WORLD_CONFIG_ENDPOINT = 'interface.php?func=get_config';
const UNIT_INFO_ENDPOINT = 'interface.php?func=get_unit_info';
const BUILDING_INFO_ENDPOINT = 'interface.php?func=get_building_info';

const WORLD_CONFIG_KEY = 'worldConfig';
const UNIT_INFO_KEY = 'unitInfo';
const BUILDING_INFO_KEY = 'buildingInfo';

const request = async (endpoint: string): Promise<string> => {
    let baseURL = new URL(window.location.origin);
    let requestURL = `${baseURL}/${endpoint}`;

    let response = await fetch(requestURL);
    let body = await response.text();

    return body;
}

const get = async (endpoint: string, cacheKey: string): Promise<any> => {
    let item = Storage.getItem(cacheKey);

    if (item) {
        return JSON.parse(item); 
    }

    let response = await request(endpoint);
    let json = xmlToJson(response);

    Storage.setRawItem(cacheKey, json);

    return json;
}

export const getWorldConfiguration = async (): Promise<WorldConfiguration> => {
    return get(WORLD_CONFIG_ENDPOINT, WORLD_CONFIG_KEY);
}

export const getBuildingInfo = async (): Promise<Record<BuildingInfoKeys, BuildingInfo>> => {
    let data = await get(BUILDING_INFO_ENDPOINT, BUILDING_INFO_KEY);

    return data as Record<BuildingInfoKeys, BuildingInfo>;
}

export const getUnitInfo = async (): Promise<Record<UnitInfoKeys, UnitInfo>> => {
    let data = await get(UNIT_INFO_ENDPOINT, UNIT_INFO_KEY) ;

    return data as Record<UnitInfoKeys, UnitInfo>;
}