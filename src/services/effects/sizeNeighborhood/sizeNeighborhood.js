export const sizeNeighborhood = (inputImageCanvas, {scaleX, scaleY}) => {
    const inputWidth = inputImageCanvas.width;
    const inputHeight = inputImageCanvas.height;
    const scaledWidth = inputWidth * parseInt(scaleX, 10) / 100;
    const scaledHeight = inputHeight * parseInt(scaleY, 10) / 100;
    const context = inputImageCanvas.getContext('2d');
    const ratioX = (inputWidth * 1) / (scaledWidth);
    const ratioY = (inputHeight * 1) / (scaledHeight);

    const resultImageData = context.createImageData(scaledWidth, scaledHeight);
    const sourceImage = context.getImageData(0 ,0, inputWidth, inputHeight);
    for (let i = 0; i < scaledHeight; i++) {
        for (let j = 0; j < scaledWidth; j++) {
            const indexSrc = (Math.floor(i * ratioY) * inputWidth + Math.floor(j * ratioX)) * 4;
            const indexDst = (i * scaledWidth + j) * 4;
            resultImageData.data[indexDst] = sourceImage.data[indexSrc];
            resultImageData.data[indexDst+1] = sourceImage.data[indexSrc + 1];
            resultImageData.data[indexDst+2] = sourceImage.data[indexSrc + 2];
            resultImageData.data[indexDst+3] = sourceImage.data[indexSrc + 3];
        }
    }

    return {
        resultImageData,
        width: scaledWidth,
        height: scaledHeight
    };
}
 