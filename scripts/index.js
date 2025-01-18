document.addEventListener('DOMContentLoaded', () => {
    const sketchpad = document.querySelector('#sketchpad');
    let isMouseDown = false;

    function createPixel(size) {
        const pixel = document.createElement('div');
        pixel.style.height = `${size}px`;
        pixel.style.width = `${size}px`;
        pixel.classList.add('pixel');       
        pixel.addEventListener('mouseover', () => {
            if (isMouseDown) {
                pixel.style.backgroundColor = "black";
            };
            
        });
        pixel.addEventListener('mousedown', () => {
            pixel.style.backgroundColor = 'black';
        });
        return pixel;
    };
   
    function startSketch(gridSize) {
        const pixelCount = gridSize * gridSize;
        const sketchpadSize = 720;
        let pixelSize = sketchpadSize / gridSize;
       
        for(let i=0;i<pixelCount;i++) {
            const pixel = createPixel(pixelSize);
            sketchpad.appendChild(pixel);
        };
    };

    document.addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    startSketch(16);
});