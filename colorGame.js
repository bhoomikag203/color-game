var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares 
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//pick random color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generate an array of random colors
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return array
    return arr;
}

//generate a single random color
function randomColor() {
    // pick red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick green from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}