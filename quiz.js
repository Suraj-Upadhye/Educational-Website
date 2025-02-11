const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color",
  },
  {
    question: "What does JS stand for?",
    options: ["JavaSystem", "JavaScript", "JustScript", "JumboStyle"],
    answer: "JavaScript",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "#", "--"],
    answer: "//",
  },
  {
    question: "Which of the following is not a JavaScript framework?",
    options: ["React", "Angular", "Django", "Vue"],
    answer: "Django",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit-btn");
const retryBtn = document.getElementById("retry-btn");
const scoreDisplay = document.getElementById("score");
const feedbackDisplay = document.getElementById("feedback");
const resultContainer = document.getElementById("result");
const timerDisplay = document.getElementById("time");

function loadQuiz() {
  quizContainer.innerHTML = "";
  quizData.forEach((q, index) => {
    let questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.options
              .map(
                (option) => `
                <label>
                    <input type="radio" name="q${index}" value="${option}"> ${option}
                </label><br>
            `
              )
              .join("")}
        `;
    quizContainer.appendChild(questionDiv);
  });
}

function startTimer() {
  timeLeft = 30;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
}

function submitQuiz() {
  clearInterval(timer);
  let answers = document.querySelectorAll("input[type='radio']:checked");

  score = 0;
  quizData.forEach((q, index) => {
    if (answers[index] && answers[index].value === q.answer) {
      score++;
    }
  });

  scoreDisplay.innerText = score;

  feedbackDisplay.innerText =
    score === 5
      ? "Excellent! 🎉"
      : score >= 3
      ? "Good Job! Keep Practicing! 👍"
      : "Try Again! You can do better! 💪";

  resultContainer.style.display = "block";
  submitBtn.style.display = "none";
  retryBtn.style.display = "inline-block";
}

function retryQuiz() {
  resultContainer.style.display = "none";
  submitBtn.style.display = "inline-block";
  retryBtn.style.display = "none";
  loadQuiz();
  startTimer();
}

submitBtn.addEventListener("click", submitQuiz);
retryBtn.addEventListener("click", retryQuiz);

// Load quiz when page loads
loadQuiz();
startTimer();
