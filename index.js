//Declaration of constant values for the starting state of the page
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#993955';
const DEFAULT_COLOR_MODE = 'colorPicker';

let canvas = document.querySelector(".canvas");

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentColorMode = DEFAULT_COLOR_MODE;
let pixels;
let mouseDown = false;

let colorPickerButton = document.getElementById('colorPicker');
colorPickerButton.addEventListener('click', () => {
    currentColorMode = 'colorPicker';
});

let rainbowButton = document.getElementById("rainbowMode");
rainbowButton.addEventListener('click', () =>{
    currentColorMode = 'rainbow';
});

let eraserButton = document.getElementById("eraserMode");
eraserButton.addEventListener('click', () => {
    currentColorMode = 'eraser';
});

let clearButton = document.getElementById("clearCanvas");
clearButton.addEventListener('click', () => {
    clearAll();
});

let sizeDisplay = document.getElementById("sizeDisplay");
let sizeSlider = document.getElementById("sizeRange");
sizeSlider.addEventListener("input", (event)=>{
    currentSize = event.target.value;
    sizeDisplay.textContent = currentSize + 'x' + currentSize;

    canvasBuilder(currentSize);
});

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
                if(mouseDown){
                    changeColorMode(currentColorMode);
                    pixel.style.backgroundColor = currentColor; 
                }
            });
    
            row.appendChild(pixel);
        }
    
        canvas.appendChild(row);
    }
}

function changeColorMode(colorMode){
    switch(colorMode){
        case 'colorPicker':
            currentColor = document.getElementById("colorPicker").value;
            break;
        case 'rainbow':
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);

            currentColor = '#' +  randomRed.toString(16) + randomGreen.toString(16) + randomBlue.toString(16);
            break;
        case 'eraser':
            currentColor = '#FFFFFF';
            break;
    }
}

function clearAll(){
    pixels = canvas.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = '#FFFFFF';
    });
}

//Sets the elements to default settings the first time the page is opened
window.onload = () =>{
    canvasBuilder(DEFAULT_SIZE);
    pixels = canvas.querySelectorAll('.pixel');

    document.querySelector('body').addEventListener('mousedown', () => mouseDown = true);
    document.querySelector('body').addEventListener('mouseup', () => mouseDown = false);
    
}