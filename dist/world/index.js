var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WORLD_CONFIG_ENDPOINT = 'interface.php?func=get_config';
const UNIT_INFO_ENDPOINT = 'interface.php?func=get_unit_info';
const BUILDING_INFO_ENDPOINT = 'interface.php?func=get_building_info';
const WORLD_CONFIG_KEY = `tw-framework_${window.game_data.world}_worldConfig`;
const UNIT_INFO_KEY = `tw-framework_${window.game_data.world}_unitInfo`;
const BUILDING_INFO_KEY = `tw-framework_${window.game_data.world}_buildingInfo`;
const request = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    let baseURL = new URL(window.location.origin);
    let requestURL = `${baseURL}/${endpoint}`;
    let response = yield fetch(requestURL);
    let body = yield response.text();
    //console.log(response);
    //console.log(body);
    return body;
});
const letterToUpperCaseAt = (input, index) => {
    return input.substring(0, index) + input.charAt(index).toUpperCase() + input.substr(index + 1);
};
const getIndexesOf = (input, searchElement) => {
    let results = [], i = -1;
    while ((i = input.indexOf(searchElement, i + 1)) >= 0) {
        results.push(i);
    }
    return results;
};
const createKeyForProperty = (propertyKey) => {
    let indexes = getIndexesOf(propertyKey, '_');
    propertyKey = letterToUpperCaseAt(propertyKey, 0);
    for (const index of indexes) {
        propertyKey = letterToUpperCaseAt(propertyKey, index + 1);
    }
    propertyKey = propertyKey.replaceAll('_', '');
    return propertyKey;
};
const xmlToJson = (data) => {
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
};
const get = (endpoint, cacheKey) => __awaiter(void 0, void 0, void 0, function* () {
    let item = localStorage.getItem(cacheKey);
    if (item) {
        return JSON.parse(item);
    }
    let response = yield request(endpoint);
    let json = xmlToJson(response);
    localStorage.setItem(cacheKey, JSON.stringify(json));
    return json;
});
export const getWorldConfiguration = () => __awaiter(void 0, void 0, void 0, function* () {
    return get(WORLD_CONFIG_ENDPOINT, WORLD_CONFIG_KEY);
});
export const getBuildingInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield get(BUILDING_INFO_ENDPOINT, BUILDING_INFO_KEY);
    return data;
});
export const getUnitInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield get(UNIT_INFO_ENDPOINT, UNIT_INFO_KEY);
    return data;
});
