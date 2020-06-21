var startBtn = document.getElementById('start-btn');
var clockEl = document.getElementById('clock');
var quizEl = document.getElementById('quiz');
var questionEl = document.getElementById('question');
var answerAEl = document.getElementById('choice-btnA');
var answerBEl = document.getElementById('choice-btnB');
var answerCEl = document.getElementById('choice-btnC');
var highScore = document.getElementById('high-score');
var introEl = document.getElementById('beginning');

var timeRemaining = 60;


function countdown() {
    var timeInterval = setInterval(function() {
        if (timeRemaining > 0) {
            clockEl.textContent = timeRemaining;
            timeRemaining--;
        } else {
            clockEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
}

function startQuiz() {
    introEl.classList.add('hidden');
    quizEl.classList.remove('hidden');

    showQuestion();

    for (var i = 0; i < question.length; i++) {
        if (choices.answer === true) {
            alert("Correct!");

        } else {
            alert("Wrong!");
            timeRemaining = timeRemaining - 10;
        }
    }

    
};

function showQuestion () {
    questionEl.innerHTML = "<h3 class='quiz-questions'>" + questions[0] + "</h3>";
    answerAEl.innerHTML = "<p>" + choices[0] + "</p>";
    answerBEl.innerHTML = "<p>" + choices[1] + "</p>";
    answerCEl.innerHTML = "<p>" + choices[2] + "</p>";
}

var questions = [
    "Which is an example of a boolean data type?",
    "Which is an example of a boolean data type?"
]

var choices = [
    "Hello!","False","25"
]



startBtn.onclick = countdown;
startBtn.addEventListener('click', startQuiz)
