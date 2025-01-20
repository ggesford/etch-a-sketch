document.addEventListener('DOMContentLoaded', () => {
    const sketchpad = document.querySelector('#sketchpad');
    let isMouseDown = false;

    function createPixel(size) {
        const pixel = document.createElement('div');
        pixel.style.height = `${size}px`;
        pixel.style.width = `${size}px`;
        pixel.style.backgroundColor = 'white';
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

    const newPad = document.querySelector('#newPad');

    newPad.addEventListener('click', () => {
        const allPixels = document.querySelectorAll('.pixel');
        let gridSize = prompt('Select Grid Size (max 100)', '');
        if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
            alert('Invalid Input, Please Select a Number Between 1 and 100');
            return;
        };
        allPixels.forEach( (pixel) => {
            sketchpad.removeChild(pixel);
        });
        startSketch(gridSize);
        console.log(gridSize);
    });
});