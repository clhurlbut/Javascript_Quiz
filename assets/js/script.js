// mapping to all the elements on the page 
let startQuizCont = document.getElementById("start-container");
let startQuizButton = document.getElementById("start-btn");
let startButtonHighScore = document.getElementById("start-btn-highscore")
let quizContainer = document.getElementById("quiz-container");
let timerContainer = document.getElementById("timer-container");
let questionsContainer = document.getElementById("questions-container");
let ansBtnA = document.getElementById("ans-1");
let ansBtnB = document.getElementById("ans-2");
let ansBtnC = document.getElementById("ans-3");
let answerResult = document.getElementById("answer-result");
let ansBtnD = document.getElementById("ans-4");
let resultsContainer = document.getElementById("results-container");
let endContainer = document.getElementById("end-container");
let endScore = document.getElementById("end-score");
let endScoreInitialsInput = document.getElementById("initials-input");
let submitScoreButton = document.getElementById("submit-end-score");
let highScoreContainer = document.getElementById("high-score-container");
let highScoreDisplayDiv = document.getElementById("high-score-display");
let highScoreShowInitials = document.getElementById("high-score-initials");
let highScoreShowScore = document.getElementById("high-score-score");
let endButtons = document.getElementById("end-btns-container");
let playAgainButton = document.getElementById("play-again");
let resetHighScoresButton = document.getElementById("reset-high-score")
// the array of questions for the quiz, this seemed to the best set up 
// to be able to check the answers back in a function
let quizQuestions = [
    {question: "Is Java the same as Javascript?",
    choiceA: "Yes!",
    choiceB: "No!",
    choiceC: "Well, that really depends!",
    choiceD: "You mean like coffee beans?",
    correctAnswer: "b"},

    {question: "Testing to see if it works",
    choiceA: "Yes!",
    choiceB: "No!",
    choiceC: "Well, that really depends!",
    choiceD: "You mean like coffee beans?",
    correctAnswer: "b"},

    {question: "Just to see if anything is changing",
    choiceA: "Yes!",
    choiceB: "No!",
    choiceC: "Well, that really depends!",
    choiceD: "You mean like coffee beans?",
    correctAnswer: "b"},

    {question: "Then I will figure out why the answers aren't working",
    choiceA: "Yes!",
    choiceB: "No!",
    choiceC: "Well, that really depends!",
    choiceD: "You mean like coffee beans?",
    correctAnswer: "b"},

    {question: "Is Java the same as Javascript?",
    choiceA: "Yes!",
    choiceB: "No!",
    choiceC: "Well, that really depends!",
    choiceD: "You mean like coffee beans?",
    correctAnswer: "b"},

    {question: "Is Java the same as Javascript?",
    choiceA: "Yes!",
    choiceB: "No!",
    choiceC: "Well, that really depends!",
    choiceD: "You mean like coffee beans?",
    correctAnswer: "b"},


    {question: "Is Java the same as Javascript?",
    choiceA: "Yes!",
    choiceB: "No!",
    choiceC: "Well, that really depends!",
    choiceD: "You mean like coffee beans?",
    correctAnswer: "b"},

    {question: "Is Java the same as Javascript?",
    choiceA: "Yes!",
    choiceB: "No!",
    choiceC: "Well, that really depends!",
    choiceD: "You mean like coffee beans?",
    correctAnswer: "b"},
];

// more global variables will go here 
let score = 0;
let timeLeft = 80;
let timer;
let endQuestionArray = quizQuestions.length;
let currentQuestionArray = 0;
let correct;

// function to generate questions 

function generateQuestions() {
    highScoreDisplayDiv.style.display = "none";
    if (currentQuestionArray === endQuestionArray){
        return showScore();
    }

    let displayQuestion = quizQuestions[currentQuestionArray];
    questionsContainer.innerHTML = "<p>" + displayQuestion.question + "</p>";
    ansBtnA.innerHTML = displayQuestion.choiceA;
    ansBtnB.innerHTML = displayQuestion.choiceB;
    ansBtnC.innerHTML = displayQuestion.choiceC;
    ansBtnD.innerHTML = displayQuestion.choiceD;
};

// function to start quiz with timer and hide buttons and text away 
function startQuiz(){
    endContainer.style.display = "none";
    startQuizCont.style.display = "none";
    generateQuestions();

// setting the timer

timer = setInterval(function() {
    timeLeft--;
    timerContainer.textContent = "Time left: " + timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        showScore();
    }
}, 1000);
quizContainer.style.display = "block";
}

// function to show the score at the end of the quiz and remove the other html elements
function showScore() {
    quizContainer.style.display = "none";
    endContainer.style.display = "flex";
    clearInterval(timer);
    endScoreInitialsInput.value = "";
    endScore.innerHTML = "Wow! You got " + score + " out of " + quizQuestions.length + " questions correct!";

}

// event for the submit button to run a function of submitting the 
// player initials and score into the array in local storage, then runs the
// highscore display function

submitScoreButton.addEventListener("click", function highscore(){
    if(endScoreInitialsInput.value === "") {
        alert("Please enter your initials!");
        return false; 
    } else {
        let savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        let currentPlayer = endScoreInitialsInput.value.trim();
        let currentHighScore = {
            name : currentPlayer,
            score : score
        };

        endContainer.style.display = "none";
        highScoreContainer.style.display = "flex";
        highScoreDisplayDiv.style.display = "block";
        endButtons.style.display = "flex";

        savedScores.push(currentHighScore);
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
        generateHighScores();


    }
});

// function to pull up the highscores from the local storage

function generateHighScores(){
    highScoreShowInitials.innerHTML = "";
    highScoreShowScore.innerHTML = "";
    var highScores = JSON.parse(localStorage.getItem("savedScores")) || [];
    for (i=0; i<highScores.length; i++) {
        let newName = document.createElement("li");
        let newScore = document.createElement("li");
        newName.textContent = highScores[i].name;
        newScore.textContent = highScores[i].score;
        highScoreShowInitials.appendChild(newName);
        highScoreShowScore.appendChild(newScore);
    }

}

// function to display the high scores and hide all the other elements with onclick in html

function displayHighScore(){
    startQuizCont.style.display = "none";
    endContainer.style.display = "none";
    highScoreContainer.style.display = "flex";
    highScoreDisplayDiv.style.display = "block";
    endButtons.style.display = "flex";
    generateHighScores();
}

// function to clear the localstorage and textContent with onclick in html 

function clearScore(){
    window.localStorage.clear();
    highScoreShowInitials.textContent = "";
    highScoreShowScore.textContent = "";
}

// function to replay the quiz with onclick in html, i know it is not the best so I will get rid of it soon 
function replay(){
    highScoreContainer.style.display = "none";
    endContainer.style.display = "none";
    startQuizCont.style.display = "flex";
    timeLeft = 80;
    score = 0;
    currentQuestionArray = 0;
}
// function to check repsonses to answers, using the onclick in the html to run this function! thanks google!

function checkAnswer(answer){
    correct = quizQuestions[currentQuestionArray].correctAnswer;

    if (answer === correct && currentQuestionArray !== endQuestionArray){
        score++;
        answerResult.innerHTML="Ding, ding, ding! That is correct!";
        currentQuestionArray++;
        generateQuestions();
    } else if (answer !== correct && currentQuestionArray !== endQuestionArray){
        timeLeft--;
        answerResult.innerHTML="Whomp, whomp. Incorrect. Time penalty -1";
        currentQuestionArray++;
        generateQuestions();
    } else {
        showScore();
    }
}


startQuizButton.addEventListener("click", startQuiz);