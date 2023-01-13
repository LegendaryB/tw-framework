var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { calculateDistance } from './Coordinates';
import { getUnitInfo } from '../world';
const COORDINATE_SEPARATOR = '|';
export const calculateUnitRuntime = (startX, startY, targetX, targetY, unit) => __awaiter(void 0, void 0, void 0, function* () {
    let distance = calculateDistance(startX, startY, targetX, targetY);
    let unitSpeed = (yield getUnitInfo())[unit].Speed;
    return distance * unitSpeed;
});
export const calculateUnitRuntimeByCoordinates = (startCoordinates, targetCoordinates, unit) => {
    let [startX, startY] = startCoordinates.split(COORDINATE_SEPARATOR).flatMap(coordinate => Number(coordinate));
    let [targetX, targetY] = targetCoordinates.split(COORDINATE_SEPARATOR).flatMap(coordinate => Number(coordinate));
    return calculateUnitRuntime(startX, startY, targetX, targetY, unit);
};
