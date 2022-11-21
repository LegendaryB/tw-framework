var _a;
class Translator {
    static registerTranslationProvider(lang, translations) {
        this.translationProviderMap.set(lang, translations);
    }
    static unregisterTranslationProvider(lang) {
        this.translationProviderMap.delete(lang);
    }
    static getPropertyKeyByHandlebar(handlebar) {
        return handlebar.replace('{{', '').replace('}}', '');
    }
}
_a = Translator;
Translator.translationProviderMap = new Map();
Translator.translate = (propertyKey) => {
    let provider = _a.translationProviderMap.get(navigator.language);
    provider = provider || _a.translationProviderMap['en'];
    return provider[propertyKey];
};
Translator.translateAndReplace = (data) => {
    let handlebars = data.match(/{{{?(#[a-z]+ )?[a-z]+.[a-z]*}?}}/gi);
    if (!handlebars) {
        return data;
    }
    for (const handlebar of handlebars) {
        let key = _a.getPropertyKeyByHandlebar(handlebar);
        let translatedValue = _a.translate(key);
        data = data.replace(handlebar, translatedValue);
    }
    return data;
};
export default new Translator();
