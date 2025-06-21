const questions = [
    {
        question: "Who is known as the father of Artificial Intelligence?",
        options: [" Alan Turing ", "John McCarthy", "Blaise Pascal ", "Dartmouth "],
        correctAnswer: "John McCarthy",
    },
    {
        question: "In which year was the Reserve Bank nationalised?",
        options: ["1949", "1935", "1969", "1992"],
        correctAnswer: "1949",
    },
    {
        question: "Which of the following is not an example of a Virtual Assistant?",
        options: ["Alexa", "Cortana", " Siri", "Cortesa"],
        correctAnswer: "Cortesa",
    },
    {
        question: "Who is the only cricketer so far to hit three double hundred in the ODI format of cricket?",
        options: ["M S Dhoni", "Sachin Tendulkar", "Rohit Sharma", " Virat Kohli"],
        correctAnswer: "Rohit Sharma",
    },
    {
        question: " Which country has won the Cricket World Cup the maximum number of times?",
        options: ["West Indies", "Australia", "Sri Lanka", "India"],
        correctAnswer: "Australia",
    },
    {
        question: "Which one of the following countries is called the Country of Winds?",
        options: ["India", " China", "Denmark", "Germany"],
        correctAnswer: "Denmark",
    },
    {
        question: "Which institution released the report titled Tobacco: Poisoning Our Planet?",
        options: ["NITI Ayog", "World Health Organisation", "UNICEF", "Ministry of Health and Family Welfare"],
        correctAnswer: "World Health Organisation",
    },
    {
        question: "Which city hosted Khadi Mati Art Festival 2023?",
        options: ["Ahmedabad", "Chandigarh", "Delhi", "Ranchi"],
        correctAnswer: "Ahmedabad",
    },
    {
        question: "Which Indian city hosted eleventh Bangladesh Book fair 2023?",
        options: ["Kolkata", "Mumbai", "New Delhi", "Patna"],
        correctAnswer: "Kolkata",
    },
    {
        question: "How many elements are in the periodic table?",
        options: ["118", "108", "116", "110"],
        correctAnswer: "118",
    },
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuiz = questions[currentQuestion];
    questionContainer.textContent = currentQuiz.question;
    optionsContainer.innerHTML = "";

    for (let i = 0; i < currentQuiz.options.length; i++) {
        const option = document.createElement("div");
        option.className = "option";
        option.textContent = currentQuiz.options[i];
        option.onclick = checkAnswer;
        optionsContainer.appendChild(option);
    }
}

function checkAnswer() {
    const selectedOption = this.textContent;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    // Highlight the correct answer
    highlightCorrectAnswer(correctAnswer);

    if (selectedOption === correctAnswer) {
        score++;
        this.classList.add("correct");
    } else {
        this.classList.add("incorrect");
        // Highlight the selected incorrect answer
        this.classList.add("selected-incorrect");
    }

    disableOptions();
}

function highlightCorrectAnswer(correctAnswer) {
    const options = document.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === correctAnswer) {
            options[i].classList.add("correct");
            break;
        }
    }
}

function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.onclick = null;
    });
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

nextButton.onclick = nextQuestion;

// Initial load
loadQuestion();
