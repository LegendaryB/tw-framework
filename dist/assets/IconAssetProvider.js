"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAssetProvider = void 0;
const IconAssetType_1 = require("../enums/IconAssetType");
class IconAssetProvider {
    static getBuildingIcon(building) {
        let building_name = building.toString().toLowerCase();
        return this.getIcon(building_name, IconAssetType_1.IconAssetType.Unit);
    }
    static getUnitIcon(unit) {
        let unit_name = unit.toString().toLocaleLowerCase();
        return this.getIcon(`unit_${unit_name}`, IconAssetType_1.IconAssetType.Unit);
    }
    static getIcon(name, iconAssetType) {
        let url = window.location.origin;
        let path = this.iconAssetTypeToPathMap.get(iconAssetType);
        return `${url}/${path}/${name}.png`;
    }
}
exports.IconAssetProvider = IconAssetProvider;
_a = IconAssetProvider;
IconAssetProvider.iconAssetTypeToPathMap = new Map();
IconAssetProvider.basePath = '/graphic';
(() => {
    _a.iconAssetTypeToPathMap.set(IconAssetType_1.IconAssetType.Building, `${_a.basePath}/buildings`);
    _a.iconAssetTypeToPathMap.set(IconAssetType_1.IconAssetType.Unit, `${_a.basePath}/unit`);
})();
