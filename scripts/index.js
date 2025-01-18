document.addEventListener("DOMContentLoaded", () => {
    const sketchpad = document.querySelector('#sketchpad');

    function createPixel() {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');        
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        });
        return pixel;
    };
   
    function startGame(pixelCount) {
        for(i=0;i<pixelCount;i++) {
            const pixel = createPixel();
            sketchpad.appendChild(pixel);
        };
    };
    startGame(100 * 100);
});