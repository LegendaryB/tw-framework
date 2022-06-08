const buildEndpointURL = (relativeURL) => {
    let url = new URL(window.location.href);
    return `${url.origin}/${relativeURL}`;
};

export const fetchEndpoint = async (relativeURL) => {
    let url = buildEndpointURL(relativeURL);
    let response = await fetch(url);
    let text = await response.text();

    return text;
};