var startQuizBtn = document.querySelector(".start-quiz-btn");
var timer = document.querySelector("#timer");
var question = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var quizSection = document.querySelector(".quiz-section");
var rightWrong = document.querySelector("#correct-or-incorrect");
var initialsSection = document.querySelector(".initals-section");
var submitButton = document.querySelector(".submit-btn");
var highScoreSection = document.querySelector(".highscores-section");
var viewScores = document.querySelector("#highscore");

// Questions Array
var question1 = ""
var question2 = ""
var question3 = ""
var question4 = ""
var question5 = ""
var questionsArray = [question1, question2, question3, question4, question5]

// Answers
var quizChoice1 = {
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
}
var quizChoice2 = {
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
}
var quizChoice3 = {
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
}
var quizChoice4 = {
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
}
var quizChoice5 = {
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
}

// Answer Array
var answersArray = [quizChoice1, quizChoice2, quizChoice3, quizChoice4, quizChoice5]

// Correct Answers
var correct1 = quizChoice1.choice3;
var correct2 = quizChoice2.choice2;
var correct3 = quizChoice3.choice1;
var correct4 = quizChoice4.choice2;
var correct5 = quizChoice5.choice4;
var correctArray = [correct1, correct2, correct3, correct4, correct5]

// Start Quiz Button 
startQuizBtn.addEventListener("click", startTimer)

// Hide Intro Page
startQuizBtn.addEventListener("click", function(){
    document.querySelector(".eagle").getElementsByClassName.display = "none";
    quizSection.getElementsByClassName.display="block";
})

// Show First Question
startQuizBtn.addEventListener("click", nextQuestion)


var correctIndex = 0;
function nextQuestion(){
    if(correctIndex === questionsArray.length - 1) {
        setTimeout(funtion(){quizSection.style.display = "none";
        initialsSection.style.display = "inline";
    }, 500);
    setTimeout(function(){clearInterval(timeInterval)},500);
    }else {
        question.textContent = questionsArray[correctIndex];
        answer1.textContent = answersArray[correctIndex].choice1;
        answer2.textContent = answersArray[correctIndex].choice2;
        answer3.textContent = answersArray[correctIndex].choice3;
        answer4.textContent = answersArray[correctIndex].choice4;
    }
}

var secondsLeft = 71;
var timerInterval;
function startTimer(){
    timerInterval = setInterval(function() {
        secondsLeft --;
        timer.textContent = "Time: " + secondsLeft + " seconds";
        
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            quizSection.style.display = "inline";
        }
    }, 1000);
    return timerInterval;
}



