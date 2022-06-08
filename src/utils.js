export const between = (x, min, max) => {
    return x >= min && x <= max;
}

export const firstLetterToUpperCase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
}