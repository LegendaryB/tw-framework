export declare class Storage {
    static getItem(key: string): string;
    static setItem(key: string, value: string): void;
    static setRawItem(key: string, value: any): void;
    private static createKey;
}
