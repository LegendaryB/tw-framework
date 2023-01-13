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

export const xmlToJson = (data: string) => {
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