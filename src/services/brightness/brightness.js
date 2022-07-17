export const brightness = (inputImageCtx, inputImageCanvas, brightnessValue) => {
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
 
// read the width and height of the canvas
    var width = inputImageCanvas.width;
    var height = inputImageCanvas.height;
    
    // make brightness correction
    var newImageData = inputImageCtx.createImageData(width, height);

    for (var i=0; i<height; i++)
    {
        for (var j=0; j<width; j++)
        {
            index = (i*width+j)*4;
            newImageData.data[index+3] = 255;
            newImageData.data[index+0] = LUT[imageData.data[index+0]];
            newImageData.data[index+1] = LUT[imageData.data[index+1]];
            newImageData.data[index+2] = LUT[imageData.data[index+2]];
        }
    }

    return newImageData;
}