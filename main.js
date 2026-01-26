// import data from quizdata
import { htmlQuiz, cssQuiz, jsQuiz, accessibilityQuiz } from "./quizData.js";

// dom elem
const optionBtns = document.querySelectorAll(".option");
const headerElem = document.querySelector(".quiz-title");

const questionElem = document.querySelector(".heading");
const descElem = document.querySelector(".desc");

const rightSection = document.querySelector(".right-section");
const optionSection = rightSection.querySelector(".option-section");
const nextBtn = rightSection.querySelector(".next");

// current question
let currentQuestionIndex = 0;

// current catagory
let currentCatagory = "";

// score
let score = 0;

// next question load
nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;

  if (currentCatagory === "html") {
    loadQuiz(htmlQuiz);
  }

  if (currentCatagory === "css") {
    loadQuiz(cssQuiz);
  }

  if (currentCatagory === "javascript") {
    loadQuiz(jsQuiz);
  }

  if (currentCatagory === "accessibility") {
    loadQuiz(accessibilityQuiz);
  }
});

// add event listener to all options btn
optionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // change title
    headerElem.innerHTML = btn.innerHTML;

    //show next button
    nextBtn.classList.add("active");

    //set ctagory
    currentCatagory = btn.id;

    //load quiz
    if (btn.id === "html") {
      loadQuiz(htmlQuiz);
    }

    if (btn.id === "css") {
      loadQuiz(cssQuiz);
    }

    if (btn.id === "javascript") {
      loadQuiz(jsQuiz);
    }

    if (btn.id === "accessibility") {
      loadQuiz(accessibilityQuiz);
    }
  });
});

function loadQuiz(quizData) {
  // show question and desc
  questionElem.innerHTML = quizData[currentQuestionIndex].question;
  descElem.innerHTML = `Question ${currentQuestionIndex + 1} out of ${quizData.length}`;

  // clear previoous elements
  optionSection.innerHTML = ``;

  quizData[currentQuestionIndex].answers.forEach((ans) => {
    let ansBtn = document.createElement("button");
    ansBtn.classList.add("ansbtn");
    ansBtn.innerText = ans;
    optionSection.appendChild(ansBtn);

    ansBtn.addEventListener("click", function () {
      // check answer
      checkAnswer(ans, quizData[currentQuestionIndex].correctAnswer, ansBtn);
    });
  });
}

// check answer
function checkAnswer(answer, correctAns, elem) {
  // check if selected ans is correct
  if (answer === correctAns) {
    score++;
    // show success indicator
    console.log("right ans");
    elem.classList.add("correct");
  } else {
    // show fail indicator and cursor not allowd
    console.log("wrong ans");
    elem.classList.add("incorrect");

    // cursor not allowed for multi selection
    optionSection.querySelectorAll(".ansbtn").forEach((btn) => {
      console.log(btn);
      btn.style.cursor = "not-allowed";
    });
  }
}
