var inputSides = document.querySelectorAll('.input-sides');
var btn = document.querySelector('#btn');
var output = document.querySelector('#output');

function btnHandler() {
    if (inputSides[0].value === "" || inputSides[1].value === "") {
        output.innerText = "Please enter valid inputs";
    } else if (inputSides[0].value === "0" || inputSides[1].value === "0"){
        output.innerText = "Side cannot be zero!!"
    } else {
        var side1 = Number(inputSides[0].value);
        var side2 = Number(inputSides[1].value);
        var area = side1 * side2 / 2;
        output.innerText = "Area of the triangle is " + area + " units";
    }
}

btn.addEventListener('click', btnHandler);