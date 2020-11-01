// mapping to all the elements on the page 
let startQuiz = document.getElementById("start-container");
let startQuizButton = document.getElementById("start-btn");
let quizCotainer = document.getElementById("quiz-container");
let timerContainer = document.getElementById("timer-container");
let questionsContainer = document.getElementById("questions-container");
let ansBtnA = document.getElementById("ans-1");
let ansBtnB = document.getElementById("ans-2");
let ansBtnC = document.getElementById("ans-3");
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
// the array of questions for the quiz, this seemed to the best set up 
// to be able to check the answers back in a function
let quizQuestions = [
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
let timerInterval;
let endQuestionArray = quizQuestions.length;
let currentQuestionArray = 0;
let correct;



