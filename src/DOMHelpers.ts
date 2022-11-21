export const createElement = (innerHTML: string): ChildNode => {
    let element = document.createElement('template');
    element.innerHTML = innerHTML.trim();

    return element.content.firstChild;
}