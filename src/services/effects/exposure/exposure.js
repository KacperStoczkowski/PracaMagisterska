import {transparentToWhite} from "../../transparentToWhite";

const createLookUpArray = (value) => [...Array(256).keys()].map((_, index) => {
    const val = value * index;
    return val > 255 ? Math.min(val, 255) : val;
});

export const exposure = (inputImageCanvas, exposureValue) => {
    const width = inputImageCanvas.width;
    const height = inputImageCanvas.height;
    const context = inputImageCanvas.getContext('2d');
    const lookUpArray = createLookUpArray(exposureValue);
    const imageData = transparentToWhite(context, width, height);
    const resultImageData = context.createImageData(imageData);

    for (let i = 0; i < imageData.data.length; i += 4) {
        resultImageData.data[i] = lookUpArray[imageData.data[i]];
        resultImageData.data[i + 1] = lookUpArray[imageData.data[i + 1]];
        resultImageData.data[i + 2] = lookUpArray[imageData.data[i + 2]];
        resultImageData.data[i + 3] = 255;
    }

    return resultImageData;
}