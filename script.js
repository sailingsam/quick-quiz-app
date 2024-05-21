let questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "How To Meet Ladies",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What happens if you press Alt+F4?",
    options: [
      "The active window closes",
      "You get a free pizza",
      "The computer explodes",
      "Your code writes itself",
    ],
    answer: "The active window closes",
  },
  {
    question: "What is a bug in programming?",
    options: [
      "An insect that has made your computer its home",
      "A special type of virus created by hackers",
      "A feature not yet documented",
      "An error, flaw or fault in a program",
    ],
    answer: "An error, flaw or fault in a program",
  },
  {
    question: 'What does "www" stand for in a website URL?',
    options: [
      "World Wide Wait",
      "Why Work Weekends",
      "World Wide Web",
      "Wizards, Witches, and Warlocks",
    ],
    answer: "World Wide Web",
  },
  {
    question: "What does the 404 error message mean?",
    options: [
      "The internet is about to crash",
      "Your computer is about to explode",
      "The requested page could not be found",
      "You have won a prize",
    ],
    answer: "The requested page could not be found",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let correctOption = "";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  let question = questions[currentQuestionIndex];
  document.querySelector(".center p").textContent = question.question;
  let options = document.querySelectorAll(".optionContent");
  options[0].textContent = question.options[0];
  options[1].textContent = question.options[1];
  options[2].textContent = question.options[2];
  options[3].textContent = question.options[3];
  correctOption = question.answer;

  document.getElementById("question-number").textContent = `${
    currentQuestionIndex + 1
  }/${questions.length}`;
  document.getElementById("score").textContent = score;

  let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
}

function handleOptionClick(optionElement) {
  let selectedOption =
    optionElement.querySelector(".optionContent").textContent;
  if (selectedOption === correctOption) {
    optionElement.classList.add("correct");
    score++;
  } else {
    optionElement.classList.add("incorrect");
  }

  setTimeout(() => {
    optionElement.classList.remove("correct", "incorrect");
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
      window.location.href = `end.html?score=${score}`;
    } else {
      displayQuestion();
    }
  }, 1000);
}

shuffleArray(questions);
displayQuestion();

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", () => handleOptionClick(option));
});
