import { WorldConfiguration } from './WorldConfiguration';
import { BuildingInfoKeys, BuildingInfo } from './BuildingInfo';
import { UnitInfoKeys, UnitInfo } from './UnitInfo';

const WORLD_CONFIG_ENDPOINT = 'interface.php?func=get_config';
const UNIT_INFO_ENDPOINT = 'interface.php?func=get_unit_info';
const BUILDING_INFO_ENDPOINT = 'interface.php?func=get_building_info';

const WORLD_CONFIG_KEY = `tw-framework_${window.game_data.world}_worldConfig`;
const UNIT_INFO_KEY = `tw-framework_${window.game_data.world}_unitInfo`;
const BUILDING_INFO_KEY = `tw-framework_${window.game_data.world}_buildingInfo`;

const request = async (endpoint: string): Promise<string> => {
    let baseURL = new URL(window.location.origin);
    let requestURL = `${baseURL}/${endpoint}`;

    let response = await fetch(requestURL);
    let body = await response.text();

    return body;
}

const letterToUpperCaseAt = (input: string, index: number) => {
    return input.substring(0, index) + input.charAt(index).toUpperCase() + input.substr(index + 1);
}

const getIndexesOf = (input: string, searchElement: string) => {
    let results = [], i = -1;

    while ((i = input.indexOf(searchElement, i + 1)) >= 0) {
        results.push(i);
    }

    return results;
}

const createKeyForProperty = (propertyKey: string) => {
    let indexes = getIndexesOf(propertyKey, '_');
    propertyKey = letterToUpperCaseAt(propertyKey, 0);

    for (const index of indexes) {
        propertyKey = letterToUpperCaseAt(propertyKey, index + 1);
    }

    propertyKey = propertyKey.replaceAll('_', '');

    return propertyKey;
}

const xmlToJson = (data: string) => {
    let obj = {};

    let parser = new DOMParser();
    let xml = parser.parseFromString(data, 'text/xml');
    let rootNode = xml.querySelector('config');

    for (const node of rootNode.children) {
        let key = createKeyForProperty(letterToUpperCaseAt(node.localName, 0));
        obj[key] = {};

        if (node.children.length == 0) {
            obj[key] = Number(node.innerHTML);
            continue;
        }

        for (const propNode of node.children) {
            let propertyKey = createKeyForProperty(propNode.localName);
            
            obj[key][propertyKey] = Number(propNode.innerHTML);
        }
    }

    return obj;
}

const get = async (endpoint: string, cacheKey: string): Promise<any> => {
    let item = localStorage.getItem(cacheKey);

    if (item) {
        return JSON.parse(item); 
    }

    let response = await request(endpoint);
    let json = xmlToJson(response);

    localStorage.setItem(cacheKey, JSON.stringify(json));

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