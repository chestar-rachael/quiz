const data =[
    
    id, 1,
    question, "which of these is actually a fish?",
    answers,[
        {answer:"swordfish",isCorrect: true},
        {answer:"jellyfish",isCorrect: false},
        {answer:"starfish",isCorrect: false},
        {answer:"crayfish",isCorrect: false},
    
    ]
      ]
    
    {


    id, 2,
    question, "A flutter is a group of,"
    answers,[
        {answer: "bees",isCorrect: true},
        {answer: "pengui",isCorrect: false},
        {answer: "butterflies",isCorrect: true},
        {answer: "camels",isCorrect: true },
    ]
    }

{
    [
    id, 1,
    question, "A group of which animals is referred to as a wake?",
    answers,[
        {answer: "bats",isCorrect: false},
        {answer: "vultures",isCorrect: true},
        {answer: "ants",isCorrect: false},
    ],
    ]
}


const gameScreen =document.querySelector("game")
const resultSceen =document.querySelector("results")
const questions =document.querySelector("questions")
const answersContainer =document.querySelector("answers")
const submit =document.querySelector("submit")
const play =document.querySelector("play")

let qIndex = 0
let correctCount= 0
let wrongCount= 0
let total= 0
let selectedAnswer;

const showQuestion = (qNumber)=>{
question.textContent =data[qNumber].question}

