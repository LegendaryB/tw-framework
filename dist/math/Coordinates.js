export const calculateDistance = (startX, startY, targetX, targetY) => {
    let xDistance = startX - targetX;
    let yDistance = startY - targetY;
    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
};
