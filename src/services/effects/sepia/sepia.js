import {transparentToWhite} from "../../transparentToWhite";

export const sepia = (inputImageCanvas, sepiaValue) => {
    const width = inputImageCanvas.width;
    const height = inputImageCanvas.height;
    const context = inputImageCanvas.getContext('2d');
    const imageData = transparentToWhite(context, width, height);
    const resultImageData = context.createImageData(imageData);

    for (let i = 0; i < imageData.data.length; i += 4) {
        const greyScaleValue = 0.299 * imageData.data[i] + 0.587*imageData.data[i + 1] + 0.114 * imageData.data[i + 2];
        const factorW = greyScaleValue + sepiaValue;
        const doubledFactorW = greyScaleValue + (2 * sepiaValue) ;

        resultImageData.data[i] = doubledFactorW > 255 ? Math.min(doubledFactorW, 255) : doubledFactorW;
        resultImageData.data[i + 1] = factorW > 255 ? Math.min(factorW, 255) : factorW;
        resultImageData.data[i + 2] = greyScaleValue;
        resultImageData.data[i + 3] = 255;
    }

    return {resultImageData, width, height};
}