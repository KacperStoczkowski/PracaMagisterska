export const sepia = (inputImageCtx, inputImageCanvas) => {
 
    // read the width and height of the canvas
    var width = canvas.width;
    var height = canvas.height;
    
    // convert to sepia
    var newImageData = ctx.createImageData(width, height);

    for (var i=0; i<height; i++) {
        for (var j=0; j<width; j++) {
            index = (i*width+j)*4;

            val = 0.299*imageData.data[index+0] + 0.587*imageData.data[index+1] + 0.114*imageData.data[index+2];

            if (val + 2 * sepiaValue > 255)
                newImageData.data[index+0] = 255;
            else
                newImageData.data[index+0] = val + 2 * sepiaValue;             

            if (val + sepiaValue > 255)
                newImageData.data[index+1] = 255;
            else
                newImageData.data[index+1] = val + sepiaValue;             
            
            // Jeśli nie działa spróbować z oryginalnymi nawiasami

            newImageData.data[index+2] = val;
            newImageData.data[index+3] = 255;
        }
    }
    
    return newImageData;
}