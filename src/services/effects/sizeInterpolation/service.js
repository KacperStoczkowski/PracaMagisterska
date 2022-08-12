export const getXValues = (j, ratioX, inputWidth) => {
    const x = j * ratioX;
    const x0 =  Math.floor(x);
    const tempX1 = x0 + 1;
    const x1 = tempX1 >= inputWidth ? x0 : tempX1;
    const dX = x - x0;

    return {
        x,
        x0,
        x1,
        dX
    }
};

export const getYValues = (i, ratioY, inputHeight) => {
    const y = i * ratioY;
    const y0 = Math.floor(y);
    const tempY1 = y0 + 1;
    const y1 = tempY1 >= inputHeight ? y0 : tempY1;
    const dY = y - y0;

    return {
        y,
        y0,
        y1,
        dY
    }
};

export const getSourcePixelIndexes = (inputWidth, scaledWidth, x0, x1, y0, y1) =>  {
    return {
        px00: (y0 * inputWidth + x0) * 4,
        px01: (y0 * inputWidth + x1) * 4,
        px10: (y1 * inputWidth + x0) * 4,
        px11: (y1 * inputWidth + x1) * 4
    }
};

export const getDestIndex = (xIndex, yIndex, scaledWidth) => (yIndex * scaledWidth + xIndex) * 4;

export const getPixelDataFunction = (imageData, inputWidth, xIndex, yIndex, ratioX, ratioY, scaledWidth) => {
    const { x0, dX, x1 } = getXValues(xIndex, ratioX, inputWidth);
    const { y0, dY, y1 } = getYValues(yIndex, ratioY, inputWidth);
    const { px00, px01, px10, px11 } = getSourcePixelIndexes(inputWidth, scaledWidth, x0, x1, y0, y1);

    return (currentPixelIndex) => (1.0 - dY) * ((1.0 - dX) * imageData[px00 + currentPixelIndex] + dX * imageData[px01 + currentPixelIndex]) +
        dY * ((1.0 - dX) * imageData[px10 + currentPixelIndex] + dX * imageData[px11 + currentPixelIndex]);
}