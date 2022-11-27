var inputSides = document.querySelectorAll('.input-sides');
var btn = document.querySelector('#btn');
var output = document.querySelector('#output');

function btnHandler() {
    if (inputSides[1].value === "" || inputSides[1].value === "") {
        output.innerText = "Please enter valid inputs";
    } else {
        var side1 = Number(inputSides[0].value);
        var side2 = Number(inputSides[1].value);
        var area = side1 * side2 / 2;
        output.innerText = "Area of the triangle is " + area + " units";
    }
    
}

btn.addEventListener('click', btnHandler);