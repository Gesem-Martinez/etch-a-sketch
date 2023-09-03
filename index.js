const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';


let canvas = document.querySelector(".canvas");

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
            pixel.addEventListener('mouseover', (event) => {
                event.target.classList.add('pixel-hover');
            });
    
            row.appendChild(pixel);
        }
    
        canvas.appendChild(row);
    }
}

window.onload = () =>{
    canvasBuilder(DEFAULT_SIZE);
}