const KEY_PREFIX = `tw-framework_${window.game_data.world}`;
export class Storage {
    static getItem(key) {
        key = this.createKey(key);
        return localStorage.getItem(key);
    }
    static setItem(key, value) {
        key = this.createKey(key);
        localStorage.setItem(key, value);
    }
    static setRawItem(key, value) {
        key = this.createKey(key);
        let item = JSON.stringify(value);
        localStorage.setItem(key, item);
    }
    static createKey(key) {
        return `${KEY_PREFIX}_${key}`;
    }
}
