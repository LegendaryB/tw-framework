import { UnitKeys } from '../common';
export declare const calculateUnitRuntime: (startX: number, startY: number, targetX: number, targetY: number, unit: UnitKeys) => Promise<number>;
export declare const calculateUnitRuntimeByCoordinates: (startCoordinates: string, targetCoordinates: string, unit: UnitKeys) => Promise<number>;
