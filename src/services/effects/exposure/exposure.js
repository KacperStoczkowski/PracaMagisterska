export const exposure = (inputImageCtx, inputImageCanvas, exposureValue) => {
    
    // read the width and height of the canvas
    var width = canvas.width;
    var height = canvas.height;
    
    // prepare LUT table
    var LUT = new Array(255);
        
    for (var i=0; i<256; i++) {
        var newValue = expositionValue*i;

        if (newValue > 255)
            LUT[i] = 255;
        else
            LUT[i] = newValue;
    }
    
    // make exposition correction
    var newImageData = ctx.createImageData(width, height);
    for (var i=0; i<height; i++) {
        for (var j=0; j<width; j++) {
            index = (i*width+j)*4;
            
            newImageData.data[index+3] = 255;
            newImageData.data[index+0] = LUT[imageData.data[index+0]];
            newImageData.data[index+1] = LUT[imageData.data[index+1]];
            newImageData.data[index+2] = LUT[imageData.data[index+2]];
        }
    }
    
    return newImageData;
}