var formQuiz = document.querySelector('#quiz-form');
var btn = document.querySelector('#btn');
var output = document.querySelector('#output');

var correctAnswers = ["90°", "one right angle", "12, 16, 20", "Equilateral triangle"]

function btnHandler() {
    var quizData = new FormData(formQuiz);
    var index = 0;
    var score = 0;
    for (entry of quizData.values()){
        if (entry === correctAnswers[index++]) {
            score++;
        }
    }
    output.innerText = "The score is " + score
}

btn.addEventListener('click', btnHandler);