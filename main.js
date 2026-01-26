// import data from quizdata
import {htmlQuiz, cssQuiz, jsQuiz, accessibilityQuiz} from './quizData.js'


// dom elem
const optionBtns = document.querySelectorAll('.option');
const headerElem = document.querySelector('.quiz-title');

const questionElem = document.querySelector('.heading')
const descElem = document.querySelector('.desc')

const rightSection = document.querySelector('.right-section')


// current question
let currentQuestionIndex = 0;

// score
let score = 0;




// add event listener to all options btn
optionBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
        // console.log(btn.id)
        // change title
        headerElem.innerHTML = btn.innerHTML;

        //load quiz
        if(btn.id === 'html'){
            loadQuiz(htmlQuiz);
        }

        if(btn.id === 'css'){
            loadQuiz(cssQuiz);
        }

        if(btn.id === 'javascript'){
            loadQuiz(jsQuiz);
        }

        if(btn.id === 'accessibility'){
            loadQuiz(accessibilityQuiz);
        }
    })
})




function loadQuiz(quizData){
    // show question and desc
    questionElem.innerHTML = quizData[currentQuestionIndex].question;
    descElem.innerHTML = `Question ${currentQuestionIndex + 1} out of ${quizData.length}`;

    // clear previoous elements
    rightSection.innerHTML = ``;

    quizData[currentQuestionIndex].answers.forEach((ans) => {
        let ansBtn = document.createElement('button')
        ansBtn.classList.add('ansbtn');
        ansBtn.innerText = ans;
        rightSection.appendChild(ansBtn);

        ansBtn.addEventListener('click', function(){
            // check answer
            checkAnswer(ans, quizData[currentQuestionIndex].correctAnswer, ansBtn)
        })
    })
}


// check answer
function checkAnswer(answer, correctAns, elem){
    // check if selected ans is correct
    if(answer === correctAns){
        score++;
        // show success indicator
        console.log('right ans')
    }else{
        // show fail indicator and cursor not allowd
        console.log('wrong ans')
    }

}