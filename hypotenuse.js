var inputSides = document.querySelectorAll('.input-sides');
var btn = document.querySelector('#btn');
var output = document.querySelector('#output');

function btnHandler() {
    if (inputSides[1].value === "" || inputSides[1].value === "") {
        output.innerText = "Please enter valid inputs";
    } else {
        var side1 = Number(inputSides[0].value);
        var side2 = Number(inputSides[1].value);
        var sumOfSquares = side1*side1 + side2*side2;
        var hypotenuse = Math.sqrt(sumOfSquares);
        output.innerText = "The length of hypotenuse is " + hypotenuse;
    }
    
}

btn.addEventListener('click', btnHandler);