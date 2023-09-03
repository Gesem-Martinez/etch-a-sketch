let canvas = document.querySelector(".canvas");
let pixelSides = 700/16;


function canvasBuilder(size){
    //Resets the canvas content
    canvas.textContent = '';

    //Sets the canvas size
    for(let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('row');
    
        for(let j = 0; j < size; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
    
            row.appendChild(pixel);
        }
    
        canvas.appendChild(row);
    }
}

canvasBuilder(27);