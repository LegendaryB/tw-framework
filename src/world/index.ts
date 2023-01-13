import { WorldConfiguration } from './WorldConfiguration';
import { BuildingInfo } from './BuildingInfo';
import { UnitInfo } from './UnitInfo';
import { BuildingKeys, UnitKeys } from '../common';

import { Storage } from '../storage';
import { xmlToJS } from './xmlToJS';

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
    let obj = xmlToJS(response);

    Storage.setRawItem(cacheKey, obj);

    return obj;
}

export const getWorldConfiguration = async (): Promise<WorldConfiguration> => {
    return get(WORLD_CONFIG_ENDPOINT, WORLD_CONFIG_KEY);
}

export const getBuildingInfo = async (): Promise<Record<BuildingKeys, BuildingInfo>> => {
    let data = await get(BUILDING_INFO_ENDPOINT, BUILDING_INFO_KEY);

    return data as Record<BuildingKeys, BuildingInfo>;
}

export const getUnitInfo = async (): Promise<Record<UnitKeys, UnitInfo>> => {
    let data = await get(UNIT_INFO_ENDPOINT, UNIT_INFO_KEY) ;

    return data as Record<UnitKeys, UnitInfo>;
}