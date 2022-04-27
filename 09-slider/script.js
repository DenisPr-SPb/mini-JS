//find elements
const showPrevBtn = document.querySelector('#show-prev');
const showNextBtn = document.querySelector('#show-next');
const slideImg = document.querySelector('#slide-img');

// events
showPrevBtn.addEventListener('click',onShowPrevBtnClicked);
showNextBtn.addEventListener('click',onShowNextBtnClicked);

// img array
const imagesSrc = ['./img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg'];
let currentImgIndex = 0;

slideImg.src = imagesSrc[currentImgIndex];
showPrevBtn.disabled = true;




// functions
function onShowPrevBtnClicked() {
    // console.log('prev button clicked');
    currentImgIndex--;
    slideImg.src = imagesSrc[currentImgIndex];
    showNextBtn.disabled = false;

    if (currentImgIndex === 0) {
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtnClicked() {
    // console.log('next button clicked');
    currentImgIndex++;
    slideImg.src = imagesSrc[currentImgIndex];
    showPrevBtn.disabled = false;

    if (currentImgIndex === imagesSrc.length - 1) {
        showNextBtn.disabled = true;
    }
    
}