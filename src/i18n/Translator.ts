class Translator {
    private static translationProviderMap: Map<string, any> = new Map<string, any>();

    public static registerTranslationProvider(lang: string, translations: any) {
        this.translationProviderMap.set(lang, translations);
    }

    public static unregisterTranslationProvider(lang: string) {
        this.translationProviderMap.delete(lang);
    }

    public static translate = (propertyKey: string) => {
        let provider = this.translationProviderMap.get(navigator.language);
        provider = provider || this.translationProviderMap['en'];

        return provider[propertyKey];
    }

    public static translateAndReplace = (data: string) => {
        let handlebars = data.match(/{{{?(#[a-z]+ )?[a-z]+.[a-z]*}?}}/gi);

        if (!handlebars) {
            return data;
        }

        for (const handlebar of handlebars) {
            let key = this.getPropertyKeyByHandlebar(handlebar);
            let translatedValue = this.translate(key);
    
            data = data.replace(handlebar, translatedValue);
        }
    
        return data;
    }

    private static getPropertyKeyByHandlebar(handlebar: string): string {
        return handlebar.replace('{{', '').replace('}}', '');
    }
}

export default new Translator();