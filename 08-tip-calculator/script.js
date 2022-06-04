// -----------рисуем кнопки
const output = document.querySelector('.display__output')
const div = document.createElement('div');
div.classList.add('buttons__keyboard');
document.querySelector('.buttons__body').appendChild(div);

const calcButtons = 'AC ? . / 7 8 9 * 4 5 6 - 1 2 3 + 0 =';
calcButtons.split(' ').map(symbol => {
    div.insertAdjacentHTML('beforeend', `<button class="button btn--${symbol}">${symbol}</button>`);
});
// -----------рисуем кнопки КОНЕЦ

//-------------------------------------------------------------------------------------
let firstNum = ''; // перве число
let secondNum = ''; //второе число
let sign = ''; 
let finish = false;
 
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operation = ['+', '-', '*', '/']

function clearAll () { 
    firstNum = '';
    secondNum = '';
    sign = '';
    finish = false;
    output.innerHTML = 0;
}

document.querySelector('.buttons__body').onclick = (event) => {
    
    if(!event.target.classList.contains('button')) {
        return console.log('NOT BTN');
    }
    if(event.target.classList.contains('btn--AC')) {
        clearAll();
    }
    output.textContent = '';
    const key = event.target.textContent;
    if (nums.includes(key)) {
        if (secondNum == '' && sign == '') {
            firstNum += key;
            output.textContent = firstNum;
        } else if ( firstNum !== '' && secondNum !== '' && finish) {
            secondNum = key;
            finish = false;
            output.textContent = secondNum;
        } else {
            secondNum += key;
            output.textContent = secondNum;
            
        }
        return;
    }

    if (operation.includes(key)) {
        sign = key;
        output.textContent = sign;
        return;
    }
 
    if (key === '=') { 
        if (secondNum === '') {
            secondNum = firstNum;
        }
        switch (sign) {
            case '+' : 
            firstNum = +firstNum + +secondNum;
            break;
            case '-' : 
            firstNum = +firstNum - +secondNum;
            break;
            case '*' : 
            firstNum = +firstNum * +secondNum;
            break;
            case '/' : 
            if (firstNum === '0' || secondNum === '0') {
                output.textContent = 'На 0 делить нельзя!';
                firstNum = '' ;
                secondNum = '';
                sign = '';
                return;
            }
            firstNum = +firstNum / +secondNum;
            break;
        }
        finish = true;
        output.textContent = firstNum;
        console.log( firstNum,sign, secondNum);
    }
}



