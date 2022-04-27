const slider = {
    imagesSrc: [],
    currentImgIndex: 0,
    showPrevBtn: document.querySelector('#show-prev'),
    showNextBtn: document.querySelector('#show-next'),
    slideImg: document.querySelector('#slide-img'),

    start: function (){
        let that = this;

        this.showPrevBtn.addEventListener('click', function (event) {
            that.onShowPrevBtnClicked(event)
        });
        this.showNextBtn.addEventListener('click',function (event) {
            that.onShowNextBtnClicked(event)
        });
        
        // img array
        this.imagesSrc.push('./img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg');
                
        this.slideImg.src = this.imagesSrc[this.currentImgIndex];
        this.showPrevBtn.disabled = true;   
    },



    onShowPrevBtnClicked: function(event) {
        
        this.currentImgIndex--;
        this.slideImg.src = this.imagesSrc[this.currentImgIndex];
        this.showNextBtn.disabled = false;
    
        if (this.currentImgIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClicked: function(event) {
        
        this.currentImgIndex++;
        this.slideImg.src = this.imagesSrc[this.currentImgIndex];
        this.showPrevBtn.disabled = false;
    
        if (this.currentImgIndex === this.imagesSrc.length - 1) {
            this.showNextBtn.disabled = true;
        }
        
    }


};
