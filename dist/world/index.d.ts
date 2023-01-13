import { WorldConfiguration } from './WorldConfiguration';
import { BuildingInfoKeys, BuildingInfo } from './BuildingInfo';
import { UnitInfoKeys, UnitInfo } from './UnitInfo';
export declare const getWorldConfiguration: () => Promise<WorldConfiguration>;
export declare const getBuildingInfo: () => Promise<Record<BuildingInfoKeys, BuildingInfo>>;
export declare const getUnitInfo: () => Promise<Record<UnitInfoKeys, UnitInfo>>;
