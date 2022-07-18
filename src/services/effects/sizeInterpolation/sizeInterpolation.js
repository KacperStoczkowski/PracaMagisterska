export const sizeInterpolation = (inputImageCtx, inputImageCanvas, sizeValue) => {
    
    // set new size
    canvas.width = width * scaleX / 100.0;
    canvas.height = height * scaleY / 100.0;
    
    // perform bilinear interpolation algorithm
    var ratiox = (width*1.0)/(canvas.width*1.0);
    var ratioy = (height*1.0)/(canvas.height*1.0);
    
    var newImageData = ctx.createImageData(canvas.width, canvas.height);
    
    for (var i=0; i<canvas.height; i++) {
        for (var j=0; j<canvas.width; j++) {
            var x = j*ratiox;
            var y = i*ratioy;
            var x0 = Math.floor(x);
            var y0 = Math.floor(y);
            var dx = x - x0;
            var dy = y - y0;
            var x1 = x0 + 1;
            var y1 = y0 + 1;

            if (x1 >= width)
                x1 = x0;
            if (y1 >= height) 
                y1 = y0;
            
            var indexSrc00 = (y0*width+x0)*4;
            var indexSrc01 = (y0*width+x1)*4;
            var indexSrc10 = (y1*width+x0)*4;;
            var indexSrc11 = (y1*width+x1)*4;;
            var indexDst = (i*canvas.width+j)*4;
            
            newImageData.data[indexDst+0] =
                (1.0-dy) * ((1.0-dx)*imageData.data[indexSrc00+0] + dx*imageData.data[indexSrc01+0]) +
                dy       * ((1.0-dx)*imageData.data[indexSrc10+0] + dx*imageData.data[indexSrc11+0]);
            newImageData.data[indexDst+1] =
                (1.0-dy) * ((1.0-dx)*imageData.data[indexSrc00+1] + dx*imageData.data[indexSrc01+1]) +
                dy       * ((1.0-dx)*imageData.data[indexSrc10+1] + dx*imageData.data[indexSrc11+1]);
            newImageData.data[indexDst+2] =
                (1.0-dy) * ((1.0-dx)*imageData.data[indexSrc00+2] + dx*imageData.data[indexSrc01+2]) +
                dy       * ((1.0-dx)*imageData.data[indexSrc10+2] + dx*imageData.data[indexSrc11+2]);
            newImageData.data[indexDst+3] =
                (1.0-dy) * ((1.0-dx)*imageData.data[indexSrc00+3] + dx*imageData.data[indexSrc01+3]) +
                dy       * ((1.0-dx)*imageData.data[indexSrc10+3] + dx*imageData.data[indexSrc11+3]);
        }
    }
    
    return newImageData;
}