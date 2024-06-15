const data = [
    {
        id: 1,
        question: "Which of these is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ]
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ]
    },
    {
        id: 3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ]
    }
];



const gameScreen = document.querySelector(".game")
const resultSceen = document.querySelector(".results")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer;

const showQuestion = (qNumber) => {
    selectedAnswer = null;
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qIndex].answers.map((item, index) => `<div class="answers">
<input name="answer" type="radio" id=${index} name="answer" value=${item.iscorrect}>
<label for="1">${item.answer}</label>
</div>`

    ).join("");

    selectAnswer()
};
const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctAnswer++ : wrongCount++
            qIndex++
            showQuestion(qIndex)
        } else alert("select an answer")
    })
}
showQuestion(qIndex);
submitAnswer()