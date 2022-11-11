import { Building } from "../enums/Building";
import { IconAssetType } from "../enums/IconAssetType";
import { Unit } from "../enums/Unit";
export declare class IconAssetProvider {
    private static iconAssetTypeToPathMap;
    private static basePath;
    static getBuildingIcon(building: Building): string;
    static getUnitIcon(unit: Unit): string;
    static getIcon(name: string, iconAssetType: IconAssetType): string;
}
