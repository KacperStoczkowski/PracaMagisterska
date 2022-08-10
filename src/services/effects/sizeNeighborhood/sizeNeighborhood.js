export const sizeNeighborhood = (inputImageCanvas, scaleX, scaleY, width, height) => {
    const scaledWidth = width * scaleX / 100;
    const scaledHeight = height * scaleY / 100;
    const context = inputImageCanvas.getContext('2d');
    const ratioX = (width * 1) / (scaledWidth);
    const ratioY = (height * 1) / (scaledHeight);
    const resultImageData = context.createImageData(scaledWidth, scaledHeight);
    const sourceImage = context.getImageData(0 ,0, width, height);

    for (let i = 0; i < scaledHeight; i++) {
        for (let j = 0; j < scaledWidth; j++) {
            const indexSrc = (Math.floor(i * ratioY) * width + Math.floor(j * ratioX)) * 4;
            const indexDst = (i * scaledWidth + j) * 4;
            resultImageData.data[indexDst] = sourceImage.data[indexSrc];
            resultImageData.data[indexDst+1] = sourceImage.data[indexSrc + 1];
            resultImageData.data[indexDst+2] = sourceImage.data[indexSrc + 2];
            resultImageData.data[indexDst+3] = sourceImage.data[indexSrc + 3];
        }
    }

    return resultImageData;
}
 