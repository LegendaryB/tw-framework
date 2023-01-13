import { UnitKeys } from '../common';
import { calculateDistance } from './Coordinates';
import { getUnitInfo } from '../world';

const calculateUnitRuntime = async (startX: number, startY: number, targetX: number, targetY: number, unit: UnitKeys): Promise<number> => {
    let distance = calculateDistance(startX, startY, targetX, targetY);
    let unitSpeed = (await getUnitInfo())[unit].Speed;

    return distance * unitSpeed;
}

const calculateUnitRuntimeByCoordinates = (startCoordinates: string, targetCoordinates: string, unit: UnitKeys): Promise<number> => {
    let [startX, startY] = startCoordinates.split('|').flatMap(coordinate => Number(coordinate));
    let [targetX, targetY] = targetCoordinates.split('|').flatMap(coordinate => Number(coordinate));

    return calculateUnitRuntime(
        startX,
        startY,
        targetX,
        targetY,
        unit
    );
}