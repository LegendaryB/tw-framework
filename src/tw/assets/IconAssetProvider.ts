import { Building } from "../enums/Building";
import { IconAssetType } from "../enums/IconAssetType";
import { Unit } from "../enums/Unit";

export class IconAssetProvider {
    private static iconAssetTypeToPathMap = new Map<IconAssetType, string>();
    private static basePath = '/graphic';

    static {
        this.iconAssetTypeToPathMap.set(IconAssetType.Building, `${this.basePath}/buildings`);
        this.iconAssetTypeToPathMap.set(IconAssetType.Unit, `${this.basePath}/unit`);
    }

    public static getBuildingIcon(building: Building): string {
        let building_name = Building[building].toString();

        return this.getIcon(building_name, IconAssetType.Unit);
    }

    public static getUnitIcon(unit: Unit): string {
        let unit_name = Unit[unit].toLowerCase();

        return this.getIcon(`unit_${unit_name}`, IconAssetType.Unit);
    }

    public static getIcon(name: string, iconAssetType: IconAssetType): string {
        let url = window.location.origin;
        let path = this.iconAssetTypeToPathMap.get(iconAssetType);

        return `${url}/${path}/${name}.png`;
    }
}