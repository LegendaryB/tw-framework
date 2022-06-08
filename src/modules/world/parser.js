import { getIndexesOf, letterToUpperCaseAt } from "../../utils";

const buildPropertyKey = (name) => {
    let indexes = getIndexesOf(name, '_');

    let key = name;
    key = letterToUpperCaseAt(key, 0);

    for (const index of indexes) {
        key = letterToUpperCaseAt(key, index + 1);
    }

    key = key.replaceAll('_', '');

    return key;
}

export const parseXML = (data) => {
    let obj = {};

    let parser = new DOMParser();
    let xml = parser.parseFromString(data, 'text/xml');
    let rootNode = xml.querySelector('config');

    for (const node of rootNode.children) {
        let key = letterToUpperCaseAt(node.localName, 0);
        obj[key] = {};

        for (const propNode of node.children) {
            let propertyKey = buildPropertyKey(propNode.localName);
            
            obj[key][propertyKey] = Number(propNode.innerHTML);
        }
    }

    return obj;
}