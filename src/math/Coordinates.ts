export const calculateDistance = (startX: number, startY: number, targetX: number, targetY: number) => {
    let xDistance = startX - targetX;
    let yDistance = startY - targetY;

    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}