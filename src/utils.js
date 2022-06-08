export const between = (x, min, max) => {
    return x >= min && x <= max;
}

export const letterToUpperCaseAt = (str, index) => {
    return str.substr(0, index) + str.charAt(index).toUpperCase() + str.substr(index + 1);
}

export const getIndexesOf = (str, searchElement) => {
    var a = [], i = -1;

    while ((i = str.indexOf(searchElement, i + 1)) >= 0) {
        a.push(i);
    }

    return a;
}