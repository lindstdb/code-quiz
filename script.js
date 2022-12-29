var startQuizBtn = document.querySelector(".start-quiz-btn");
var timer = document.querySelector("#timer");
var question = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var quizSection = document.querySelector(".quiz-section");
var rightWrong = document.querySelector("#correct-or-incorrect");
var initialsSection = document.querySelector(".top-performers");
var submitButton = document.querySelector(".submit-btn");
var highScoreSection = document.querySelector(".highscores-section");
var viewScores = document.querySelector("#highscore");

// Questions Array
var question1 = "What is JavaScript?"
var question2 = "Which of the following is correct about JavaScript?"
var question3 = "Among the given statements, which statement defines closures in JavaScript?"
var question4 = "Arrays in JavaScript are defined by which of the following statements?"
var question5 = ""
var questionsArray = [question1, question2, question3, question4, question5]

// Answers
var quizChoice1 = {
    choice1: "JavaScript is an assembly language used to make the website interactive",
    choice2: "JavaScript is a compiled language used to make the website interactive",
    choice3: "JavaScript is a scripting language used to make the website interactive",
    choice4: "None of the mentioned",
}
var quizChoice2 = {
    choice1: "JavaScript is Assembly-language",
    choice2: "JavaScript is an Object-Based language",
    choice3: "JavaScript is an Object-Oriented language",
    choice4: "JavaScript is a High-level language",
}
var quizChoice3 = {
    choice1: "JavaScript is a function that is enclosed with references to its lexical environment",
    choice2: "JavaScript is a function that is enclosed with references to its inner function scope",
    choice3: "JavaScript is a function that is enclosed with the object to its inner function scope",
    choice4: "None of the mentioned",
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
    document.querySelector(".eagle").style.display = "none";
    quizSection.style.display = "block";
})

// Show First Question
startQuizBtn.addEventListener("click", nextQuestion)


var correctIndex = 0;
function nextQuestion(){
    if(correctIndex === questionsArray.length - 1) {
        setTimeout (function() {quizSection.style.display = "none";
        initialsSection.style.display = "inline";
    },500);
        setTimeout(function(){clearInterval(timerInterval)},500);
    } else {
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

// Determine if the correct answer was selected
quizSection.addEventListener("click", determineCorrectAnswer)

function determineCorrectAnswer(event){
    if(event.target.matches(".btn-warning")){
        var chosenAnswer = event.target.textContent;
        rightWrong.textContent = "";
        rightWrong.style.display = "block";
            if(chosenAnswer === correctArray[correctIndex]) {
                rightWrong.textContent = "Correct";
                setTimeout(function() {rightWrong.style.display = "none"}, 500);
            } else {
                rightWrong.textContent = "Incorrect";
                setTimeout(function() {rightWrong.style.display = "none"}, 500);
                secondsLeft -= 10;
                timer.textContent = "Time: " + secondsLeft + " seconds";
            }
            correctIndex++;
    }
    return secondsLeft;
};

// After Clicked Answer Proceed to Next Question
quizSection.addEventListener("click", function(event){
    if (event.target.matches(".btn-warning")) {
        nextQuestion();
    }
})

// Submit Button
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    newUser();
        initialsSection.style.display = "none";
        document.querySelector(".highscores-section").style.display = "block";
        document.querySelector(".user-scores").style.dsiplay = "block";
})

// Local Storage Records
function newUser() {
    var userInitial = document.querySelector("#initials").value;
    if (userInitial === "") {
        userInitial = "anonymous";
    }
    localStorage.setItem(userInitial, secondsLeft);
    document.querySelector(".user-scores").textContent = " ";
    var p = document.createElement("p");
    p.textContent = userInitial + ": " + secondsLeft;
    document.querySelector(".user-scores").appendChild(p);
}

// Re-Start the Quiz
document.querySelector(".challenge-again").addEventListener ("click", function(){
    correctIndex = 0;
    secondsLeft = 71;
    timer.textContent = "Time: 71 Seconds"
    document.querySelector(".eagle").style.display = "block";
    highScoreSection.style.display = "none";
})

// Clear High Scores
document.querySelector(".clear-highscores").addEventListener("click", function(){
    localStorage.clear();
    document.querySelector(".user-scores").textContent = " ";
    document.querySelector(".user-scores").display = "none";
});

viewScores.addEventListener("click", function() {
    clearInterval(timerInterval);
    document.querySelector(".eagle").style.display = "none";
    quizSection.style.display = "none";
    initialsSection.style.display = "none";
    highScoreSection.style.display = "block";
    document.querySelector(".user-scores").textContent = " ";
    for (let i = 0; i< localStorage.length; i++) {
        var p = document.createElement("p");
        var user = localStorage.key(i);
        var scores = localStorage.getItem(localStorage.key(i));
        p.textContent = user + ": " + scores;
        document.querySelector(".user-scores").appendChild(p);
    }
})