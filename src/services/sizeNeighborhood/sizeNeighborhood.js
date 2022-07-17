export const sizeNeighborhood = (inputImageCtx, inputImageCanvas, sizeValue) => {
    
    // set new size
    canvas.width = width * scaleX / 100.0;
    canvas.height = height * scaleY / 100.0;
    
    // perform neirest neighbour algorithm
    var ratiox = (width*1.0)/(canvas.width*1.0);
    var ratioy = (height*1.0)/(canvas.height*1.0);

    var newImageData = ctx.createImageData(canvas.width, canvas.height);

    for (var i=0; i<canvas.height; i++) {
        for (var j=0; j<canvas.width; j++) {
            var indexSrc = (Math.floor(i*ratioy)*width+Math.floor(j*ratiox))*4;
            var indexDst = (i*canvas.width+j)*4;
            
            newImageData.data[indexDst+0] = imageData.data[indexSrc+0];
            newImageData.data[indexDst+1] = imageData.data[indexSrc+1];
            newImageData.data[indexDst+2] = imageData.data[indexSrc+2];
            newImageData.data[indexDst+3] = imageData.data[indexSrc+3];
        }
    }

    return newImageData;
}
 