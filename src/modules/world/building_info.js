import { fetchEndpoint } from "./fetch";

const BUILDING_INFO_URL = 'interface.php?func=get_building_info';

export class BuildingInfo {
    static async load() {
        let data = fetchEndpoint(BUILDING_INFO_URL);

        return this.#parseUnitInfo(data);
    }

    static #parseUnitInfo(text) {
        let unitInfo = {};

        let parser = new DOMParser();
        let xml = parser.parseFromString(text, 'text/xml');
        let rootNode = xml.querySelector('config');

        for (const child of rootNode) {
            let unit = ModelFactory.createUnit(
                Number(node.querySelector('build_time').innerHTML),
                Number(node.querySelector('pop').innerHTML),
                Number(node.querySelector('speed').innerHTML),
                Number(node.querySelector('attack').innerHTML),
                Number(node.querySelector('defense').innerHTML),
                Number(node.querySelector('defense_cavalry').innerHTML),
                Number(node.querySelector('defense_archer').innerHTML),
                Number(node.querySelector('carry').innerHTML)
            );

            let unitKey = firstLetterToUpperCase(child.localName);
            unitInfo[unitKey] = unit;
        }

        return unitInfo;
    }
}