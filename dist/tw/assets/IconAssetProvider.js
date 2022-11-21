var _a;
import { Building } from "../enums/Building";
import { IconAssetType } from "../enums/IconAssetType";
import { Unit } from "../enums/Unit";
export class IconAssetProvider {
    static getBuildingIcon(building) {
        let building_name = Building[building].toString();
        return this.getIcon(building_name, IconAssetType.Unit);
    }
    static getUnitIcon(unit) {
        let unit_name = Unit[unit].toLowerCase();
        return this.getIcon(`unit_${unit_name}`, IconAssetType.Unit);
    }
    static getIcon(name, iconAssetType) {
        let url = window.location.origin;
        let path = this.iconAssetTypeToPathMap.get(iconAssetType);
        return `${url}/${path}/${name}.png`;
    }
}
_a = IconAssetProvider;
IconAssetProvider.iconAssetTypeToPathMap = new Map();
IconAssetProvider.basePath = '/graphic';
(() => {
    _a.iconAssetTypeToPathMap.set(IconAssetType.Building, `${_a.basePath}/buildings`);
    _a.iconAssetTypeToPathMap.set(IconAssetType.Unit, `${_a.basePath}/unit`);
})();
