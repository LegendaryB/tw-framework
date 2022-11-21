export declare class Translator {
    private static translationProviderMap;
    static registerTranslationProvider(lang: string, translations: any): void;
    static unregisterTranslationProvider(lang: string): void;
    static translate: (propertyKey: string) => any;
    static translateAndReplace: (data: string) => string;
    private static getPropertyKeyByHandlebar;
}
declare const _default: Translator;
export default _default;
