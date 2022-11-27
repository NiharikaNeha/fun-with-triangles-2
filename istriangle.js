var inputAngles = document.querySelectorAll('.input-angle');
var btn = document.querySelector('#btn');
var output = document.querySelector('#output')

function btnHandler() {
    if (inputAngles[0].value === "" || inputAngles[1].value === "" || inputAngles[2].value=== "" ) {
        output.innerText = "Please enter valid inputs"
    } else {
        output.innerText = ""
        var sumOfAngles = Number(inputAngles[0].value) + Number(inputAngles[1].value) + Number(inputAngles[2].value);
        if (sumOfAngles === 180) {
            output.innerText = "This is a valid traingle!!"
        } else {
            output.innerText = "This is an invalid triangle!"
        }
    }
}

btn.addEventListener('click', btnHandler);