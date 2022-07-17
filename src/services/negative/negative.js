export const negative = (inputImageCtx, inputImageCanvas) => {
    
    // read the width and height of the canvas
    var width = canvas.width;
    var height = canvas.height;
    
    // create a new pixel array
    var imageData;
    
    try {
        imageData = ctx.getImageData(0, 0, width, height);
    } catch(e) {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        imageData = ctx.getImageData(0, 0, width, height);
    }
    
    // make nagative
    for (var i=0; i<height; i++) {
        for (var j=0; j<width; j++)  {
            index = (i*width+j)*4;
            // invert pixel
            imageData.data[index+3] = 255;
            imageData.data[index+0] = 255-imageData.data[index+0];
            imageData.data[index+1] = 255-imageData.data[index+1];
            imageData.data[index+2] = 255-imageData.data[index+2];
        }
    }
    
    return newImageData;
}