const KEY_PREFIX = `tw-framework_${window.game_data.world}`;
export class Storage {
    static getItem(key) {
        key = this.makeKey(key);
        return localStorage.getItem(key);
    }
    static setItem(key, value) {
        key = this.makeKey(key);
        localStorage.setItem(key, value);
    }
    static setRawItem(key, value) {
        key = this.makeKey(key);
        let item = JSON.stringify(value);
        localStorage.setItem(key, item);
    }
    static removeItem(key) {
        key = this.makeKey(key);
        localStorage.removeItem(key);
    }
    static makeKey(key) {
        return `${KEY_PREFIX}_${key}`;
    }
}
