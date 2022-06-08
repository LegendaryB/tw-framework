import { firstLetterToUpperCase } from "../../utils";

export const parseXML = (data) => {
    let obj = {};

    let parser = new DOMParser();
    let xml = parser.parseFromString(data, 'text/xml');
    let rootNode = xml.querySelector('config');

    for (const node of rootNode.children) {
        console.log(node.localName);
        let key = firstLetterToUpperCase(node.localName);
        obj[key] = {};

        for (const propNode in node.children) {
            console.log("Prop node: " + propNode.localName);
            let propertyKey = firstLetterToUpperCase(propNode.localName);
            
            obj[key][propertyKey] = Number(propNode.innerHTML);
        }
    }

    return obj;
}