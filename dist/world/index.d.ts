import { WorldConfiguration } from './WorldConfiguration';
import { BuildingInfo } from './BuildingInfo';
import { UnitInfo } from './UnitInfo';
import { BuildingKeys, UnitKeys } from '../common';
export declare const getWorldConfiguration: () => Promise<WorldConfiguration>;
export declare const getBuildingInfo: () => Promise<Record<BuildingKeys, BuildingInfo>>;
export declare const getUnitInfo: () => Promise<Record<UnitKeys, UnitInfo>>;
