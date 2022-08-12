import { transparentToWhite } from "../../transparentToWhite";

export const negative = (inputImageCanvas) => {
    const width = inputImageCanvas.width;
    const height = inputImageCanvas.height;
    const context = inputImageCanvas.getContext('2d');
    const imageData = transparentToWhite(context, width, height);
    const resultImageData = context.createImageData(imageData);

    for (let i = 0; i < imageData.data.length; i += 4) {
        resultImageData.data[i] = 255 - imageData.data[i];
        resultImageData.data[i + 1] = 255 - imageData.data[i + 1];
        resultImageData.data[i + 2] = 255 - imageData.data[i + 2];
        resultImageData.data[i + 3] = 255;
    }

    return {resultImageData, width, height};
}