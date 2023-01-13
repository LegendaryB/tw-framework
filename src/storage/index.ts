const KEY_PREFIX = `tw-framework_${window.game_data.world}`;

export class Storage {
    public static getItem(key: string) {
        key = this.createKey(key);

        return localStorage.getItem(key);
    }

    public static setItem(key: string, value: string) {
        key = this.createKey(key);

        localStorage.setItem(key, value);
    }

    public static setRawItem(key: string, value: any) {
        key = this.createKey(key);
        let item = JSON.stringify(value);

        localStorage.setItem(key, item);
    }

    private static createKey(key: string): string {
        return `${KEY_PREFIX}_${key}`;
    }
}