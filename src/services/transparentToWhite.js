export const transparentToWhite = (context, width, height) => {
    const sourceImageData = context.getImageData(0 ,0, width, height);
    const resultImageData = context.createImageData(sourceImageData);

    for (let i = 0; i < sourceImageData.data.length; i += 4) {
        const pxR = sourceImageData.data[i];
        const pxG = sourceImageData.data[i + 1];
        const pxB = sourceImageData.data[i + 2];
        const pxA = sourceImageData.data[i + 3];
        const isPixelTransparent = pxA === 0;

        resultImageData.data[i] = isPixelTransparent ? 255 : pxR;
        resultImageData.data[i + 1] = isPixelTransparent ? 255 : pxG;
        resultImageData.data[i + 2] = isPixelTransparent ? 255 : pxB;
        resultImageData.data[i + 3] = isPixelTransparent ? 255 : pxR;
    }

    return resultImageData;
};