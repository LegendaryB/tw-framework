import { ModelFactory } from "../../models/factory";
import { firstLetterToUpperCase } from "../../utils";
import { fetchEndpoint } from "./fetch";

const UNIT_INFO_URL = 'interface.php?func=get_unit_info';

export class UnitInfo {
    static async load() {
        let data = fetchEndpoint(UNIT_INFO_URL);

        return this.#parseUnitInfo(data);
    }

    static #parseUnitInfo(text) {
        let unitInfo = {};
        const unitNames = this.#getUnitNames();

        let parser = new DOMParser();
        let xml = parser.parseFromString(text, 'text/xml');
        let rootNode = xml.querySelector('config');

        for (const name of unitNames) {
            let node = rootNode.querySelector(name);

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

            let unitKey = firstLetterToUpperCase(name);
            unitInfo[unitKey] = unit;
        }

        return unitInfo;
    }

    static #getUnitNames() {
        return game_data.units;
    }
}