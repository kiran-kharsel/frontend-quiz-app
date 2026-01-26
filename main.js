// import data from quizdata
import {htmlQuiz} from './quizData.js'


// dom elem
const optionBtns = document.querySelectorAll('.option');
const headerElem = document.querySelector('.quiz-title')

// add event listener to all options btn
optionBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
        // console.log(btn.id)
        // change title
        headerElem.innerHTML = btn.innerHTML;

        //load quiz
        if(btn.id === 'html'){
            loadQuiz();
        }
    })
})




function loadQuiz(){
    //get diff quiz array and then populate dom
}