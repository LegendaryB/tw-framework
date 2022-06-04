import { firstLetterToUpperCase } from "../../utils";

const UNIT_INFO_URL = 'interface.php?func=get_unit_info';

export class World {
    constructor(unitInfo) {
        this.world = game_data.world;
        this.UnitInfo = unitInfo;
    }

    static async load() {
        let unitInfo = await this.#loadUnitInfo();

        debugger;
        return new World(unitInfo);
    }

    static getUnitNames() {
        return game_data.units;
    }

    static async #loadUnitInfo() {
        let url = this.#getUnitInfoURL();
        let response = await fetch(url);
        let text = await response.text();

        return this.#parseUnitInfo(text);
    }

    static #parseUnitInfo(text) {
        let unitInfo = {};
        const unitNames = this.getUnitNames();

        let parser = new DOMParser();
        let xml = parser.parseFromString(text, 'text/xml');
        let rootNode = xml.querySelector('config');

        for (const name of unitNames) {
            let node = rootNode.querySelector(name);

            let unit = window.TWFramework.ModelFactory.createUnit(
                Number(node.querySelector('build_time').innerHTML),
                Number(node.querySelector('pop').innerHTML),
                Number(node.querySelector('speed').innerHTML),
                Number(node.querySelector('attack').innerHTML),
                Number(node.querySelector('defense').innerHTML),
                Number(node.querySelector('defense_cavalry').innerHTML),
                Number(node.querySelector('defense_archer').innerHTML),
                Number(node.querySelector('carry').innerHTML)
            );

            unitInfo[firstLetterToUpperCase(name)] = unit;
        }

        return unitInfo;
    }

    static #getUnitInfoURL() {
        let url = new URL(window.location.href);
        return `${url.origin}/${UNIT_INFO_URL}`;
    }
}