export const loadImage = (canvas, file, callback) => {
    const ctx = canvas.getContext('2d');

    const reader = new FileReader();
    reader.onload = function(e){
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            if (callback) {
                callback(canvas, ctx, img.width, img.height);
            }
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
}