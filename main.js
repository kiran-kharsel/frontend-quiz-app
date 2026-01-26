// dom elem

const optionBtns = document.querySelectorAll('.option');
const headerElem = document.querySelector('.quiz-title')

// add event listener to all options btn
optionBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
        // console.log(btn.id)
        // change title
        headerElem.innerHTML = btn.innerHTML;

        // this is for quiz question
        // if(btn.id === 'html'){
        //     // change innertext of header
        //     headerElem.innerHTML = btn.innerHTML;
        // }
    })
})