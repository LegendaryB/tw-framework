const KEY_PREFIX = `tw-framework_${window.game_data.world}`;

export class Storage {
    public static getItem(key: string) {
        key = this.makeKey(key);

        return localStorage.getItem(key);
    }

    public static setItem(key: string, value: string) {
        key = this.makeKey(key);

        localStorage.setItem(key, value);
    }

    public static setRawItem(key: string, value: any) {
        key = this.makeKey(key);
        let item = JSON.stringify(value);

        localStorage.setItem(key, item);
    }

    public static removeItem(key: string) {
        key = this.makeKey(key);

        localStorage.removeItem(key);
    }

    private static makeKey(key: string): string {
        return `${KEY_PREFIX}_${key}`;
    }
}