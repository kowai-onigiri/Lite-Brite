const container = document.querySelector('#container');

// Grid Generator
function createGrid(size) {
    for (i = 0; i < size**2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        let sizeSquare = (500/size)-(6);
        square.style.height = `${sizeSquare}px`;
        square.style.width = `${sizeSquare}px`;
        square.style.border = '1px solid rgb(45,45,45)';
        container.appendChild(square); 
    }
}

// Reset Grid

function resetGrid(size) {
    let squareCanvas = document.querySelectorAll(".square");
    squareCanvas.forEach(function(square) {
        square.remove();
    });
    createGrid(size);
 }


// Paint Color Functions
function paintBoxColor() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            let randomColor = getRandomColor();
            square.style.backgroundColor = randomColor;
            square.style.border = `1px solid ${randomColor}`;
            square.style.boxShadow = `0 0 7px ${randomColor}, 0 0 10px ${randomColor}, 0 0 21px ${randomColor}`;
        });
        
    });

}

function paintBoxRed() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = "#FF1D28";
            square.style.border = "1px solid #FF1D28";
            square.style.boxShadow = "0 0 7px #FF1D28, 0 0 10px #FF1D28, 0 0 21px #FF1D28";
        });
        
    });

}

function paintBoxBlue() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = "#4D5FFF";
            square.style.border = "1px solid #4D5FFF";
            square.style.boxShadow = "0 0 7px #4D5FFF, 0 0 10px #4D5FFF, 0 0 21px #4D5FFF";
        });
        
    });

}

function paintBoxYellow() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = "#FFF34D";
            square.style.border = "1px solid #FFF34D";
            square.style.boxShadow = "0 0 7px #FFF34D, 0 0 10px #FFF34D, 0 0 21px #FFF34D";
        });
        
    });

}

function paintBoxGreen() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = "#5FFF4D";
            square.style.border = "1px solid #5FFF4D";
            square.style.boxShadow = "0 0 7px #5FFF4D, 0 0 10px #5FFF4D, 0 0 21px #5FFF4D";
        });
        
    });

}

function paintBoxPurple() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = "#DC2CFF";
            square.style.border = "1px solid #DC2CFF";
            square.style.boxShadow = "0 0 7px #DC2CFF, 0 0 10px #DC2CFF, 0 0 21px #DC2CFF";
        });
        
    });

}



function paintErase() {
    let squareCanvas = document.querySelectorAll('.square');
    squareCanvas.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            square.style.border = '1px solid #6B6269';
            square.style.boxShadow = "none";
        });
        
    });

}

// Random Color Generator
function getRandomColor() {
    let nOne = Math.floor(Math.random()*256);
    let nTwo = Math.floor(Math.random()*256);
    let nThree = Math.floor(Math.random()*256);

    return `rgb(${nOne}, ${nTwo}, ${nThree})`;
}


// ***Buttons***

//reset button
const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', function(){
    let userNumber = prompt("Enter a number for square by square grid proportions. Ex. enter 16 for a 16x16 grid. Max is 100.", "Enter Number");
    if(userNumber <= 100) {
        userNumber = Math.round(userNumber);
        resetGrid(userNumber);
    }
    else {
        alert(`${userNumber} is too high. Please enter a number less than 100.`);
    }

});

//color  buttons
const redBtn = document.querySelector('.red');
redBtn.addEventListener('click', paintBoxRed);

const blueBtn = document.querySelector('.blue');
blueBtn.addEventListener('click', paintBoxBlue);

const yellowBtn = document.querySelector('.yellow');
yellowBtn.addEventListener('click', paintBoxYellow);

const greenBtn = document.querySelector('.green');
greenBtn.addEventListener('click', paintBoxGreen);

const purpleBtn = document.querySelector('.purple');
purpleBtn.addEventListener('click', paintBoxPurple);

const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', paintBoxColor);

const eraseBtn = document.querySelector('.erase');
eraseBtn.addEventListener('click', paintErase);


createGrid(16);




