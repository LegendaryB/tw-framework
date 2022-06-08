import { firstLetterToUpperCase } from "../../utils";

export const parseXML = (data) => {
    let obj = {};

    let parser = new DOMParser();
    let xml = parser.parseFromString(data, 'text/xml');
    let rootNode = xml.querySelector('config');

    for (const node of rootNode.children) {
        let key = firstLetterToUpperCase(node.localName);
        obj[key] = {};

        for (const propNode of node.children) {
            let propertyKey = firstLetterToUpperCase(propNode.localName.replace('_', ''));
            
            obj[key][propertyKey] = Number(propNode.innerHTML);
        }
    }

    return obj;
}