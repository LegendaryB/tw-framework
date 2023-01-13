var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Storage } from '../storage';
import { xmlToJson } from './xmlToJson';
const WORLD_CONFIG_ENDPOINT = 'interface.php?func=get_config';
const UNIT_INFO_ENDPOINT = 'interface.php?func=get_unit_info';
const BUILDING_INFO_ENDPOINT = 'interface.php?func=get_building_info';
const WORLD_CONFIG_KEY = 'worldConfig';
const UNIT_INFO_KEY = 'unitInfo';
const BUILDING_INFO_KEY = 'buildingInfo';
const request = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    let baseURL = new URL(window.location.origin);
    let requestURL = `${baseURL}/${endpoint}`;
    let response = yield fetch(requestURL);
    let body = yield response.text();
    return body;
});
const get = (endpoint, cacheKey) => __awaiter(void 0, void 0, void 0, function* () {
    let item = Storage.getItem(cacheKey);
    if (item) {
        return JSON.parse(item);
    }
    let response = yield request(endpoint);
    let json = xmlToJson(response);
    Storage.setRawItem(cacheKey, json);
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
