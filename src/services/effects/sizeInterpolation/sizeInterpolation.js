import {getDestIndex, getPixelDataFunction} from "./service";

export const sizeInterpolation = (inputImageCanvas, {scaleX, scaleY}) => {
    const inputWidth = inputImageCanvas.width;
    const inputHeight = inputImageCanvas.height;
    const scaledWidth = inputWidth * scaleX / 100.0;
    const scaledHeight = inputHeight * scaleY / 100.0;
    const context = inputImageCanvas.getContext('2d');

    const ratioX = (inputWidth * 1) / (scaledWidth);
    const ratioY = (inputHeight * 1) / (scaledHeight);

    const resultImageData = context.createImageData(scaledWidth, scaledHeight);
    const sourceImage = context.getImageData(0 ,0, inputWidth, inputHeight);

    for (let i = 0; i < scaledHeight; i++) {
        for (let j = 0; j < scaledWidth; j++) {
            const indexDst = getDestIndex(j, i, scaledWidth);

            const getPixelData = getPixelDataFunction(sourceImage.data, inputWidth, j, i, ratioX, ratioY, scaledWidth);

            resultImageData.data[indexDst] = getPixelData(0);
            resultImageData.data[indexDst + 1] = getPixelData(1);
            resultImageData.data[indexDst + 2] = getPixelData(2);
            resultImageData.data[indexDst + 3] = getPixelData(3);
        }
    }
    
    return {
        resultImageData,
        width: scaledWidth,
        height: scaledHeight
    };
}

