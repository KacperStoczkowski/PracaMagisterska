export const getValueForLookUpArray = (value) => {
    if (value > 255) {
        return Math.min(value, 255);
    } else if (value < 0) {
        return Math.max(value, 0);
    } else {
        return value;
    }
};