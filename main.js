

// import data from quizdata
import { htmlQuiz, cssQuiz, jsQuiz, accessibilityQuiz } from "./quizData.js";

// dom elem
const headerElem = document.querySelector(".quiz-title");

const leftSectionHeading = document.querySelector('.left-section-heading')
const leftSectionQuestion = document.querySelector('.left-section-question')
const questionElem = leftSectionQuestion.querySelector(".question");
const questionNumElem = leftSectionQuestion.querySelector(".question-num");

const rightSection = document.querySelector(".right-section");
const rightSectionCategory = rightSection.querySelector('.right-section-category')
const rightSectionAnswers = rightSection.querySelector('.right-section-answers')
const categoryBtns = document.querySelectorAll(".option");
const nextBtn = rightSection.querySelector(".next");



const optionSection = rightSection.querySelector(".option-section");




// current question
let currentQuestionIndex = 0;

// // current catagory
// let selectedCatagory = [];
// let currentCatagory = "";

// // check for selection
// let selectedAnswr = false;

// // score
// let score = 0;

// add event listener to all categoty btn
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // change title
    headerElem.innerHTML = btn.innerHTML;

    //show next button
    //nextBtn.classList.add("active");

    //set ctagory
    //currentCatagory = btn.id;

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



// // next question load
// nextBtn.addEventListener("click", function () {
//   // check for play again button
//   if (nextBtn.innerText === "Play Again") {
//     console.log("reset quiz");
//   }


//   // check if user select any option
//   if (selectedAnswr) {
//     currentQuestionIndex++;
//     selectedAnswr = false;

//     console.log(currentQuestionIndex);

//     // check for last question
//     if (currentQuestionIndex === selectedCatagory.length) {
//       // show score
//       optionSection.innerHTML = `   
//         <div class="scoreElem">
//             <div class="heading">${headerElem.innerHTML}</div>
//             <h1 class="score">${score}</h1>
//             <p>out of ${selectedCatagory.length}</p>
//         </div>
//         `;

//       // rename next button
//       nextBtn.innerText = "Play again";

//       // change heding text
//       questionElem.innerHTML = `Quiz completed <b>You scored...</b>`;
//       descElem.innerHTML = "";

//       return;
//     }

//     if (currentCatagory === "html") {
//       loadQuiz(htmlQuiz);
//     }

//     if (currentCatagory === "css") {
//       loadQuiz(cssQuiz);
//     }

//     if (currentCatagory === "javascript") {
//       loadQuiz(jsQuiz);
//     }

//     if (currentCatagory === "accessibility") {
//       loadQuiz(accessibilityQuiz);
//     }
//   } else {
//     return;
//   }
// });



function loadQuiz(quizData) {
  //selectedCatagory = [...quizData];

  // show question section
  leftSectionHeading.classList.add('hidden');
  leftSectionQuestion.classList.remove('hidden')

  // hide category button and show answers btns
  rightSectionCategory.classList.add('hidden')
  rightSectionAnswers.classList.remove('hidden')

  // show question and desc
  questionElem.innerHTML = quizData[currentQuestionIndex].question;
  questionNumElem.innerHTML = `Question ${currentQuestionIndex + 1} out of ${quizData.length}`;

  // clear previoous elements
  rightSectionAnswers.innerHTML = ``;

  quizData[currentQuestionIndex].answers.forEach((ans) => {
    let ansBtn = document.createElement("button");
    ansBtn.classList.add("answerBtn");
    ansBtn.innerText = ans;
    rightSectionAnswers.appendChild(ansBtn);

    ansBtn.addEventListener("click", function () {
      // check answer
      checkAnswer(ans, quizData[currentQuestionIndex].correctAnswer, ansBtn);

      // set selected naswer to true
      //selectedAnswr = true;
    });
  });
}

// check answer
function checkAnswer(answer, correctAns, elem) {
  // check if selected ans is correct
  if (answer === correctAns) {
    score++;
    // show success indicator
    elem.classList.add("correct");
  } else {
    // show fail indicator and cursor not allowd
    elem.classList.add("incorrect");

    // cursor not allowed for multi selection
    optionSection.querySelectorAll(".ansbtn").forEach((btn) => {
      btn.style.cursor = "not-allowed";
    });
  }
}

