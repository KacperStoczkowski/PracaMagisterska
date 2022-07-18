export const iterateThroughImage = (imageData, width, height, callback) => {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const index = (i * width + j) * 4;

            return callback(imageData.data[index]);

            if (imageData.data[index+3] == 0)
            {
                imageData.data[index+3] = 255;
                imageData.data[index+0] = 255;
                imageData.data[index+1] = 255;
                imageData.data[index+2] = 255;
            }
        }
    }
};