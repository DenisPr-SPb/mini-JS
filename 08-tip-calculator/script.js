
const output = document.querySelector('.display__output')

const div = document.createElement('div');
div.classList.add('buttons__keyboard');
document.querySelector('.buttons__body').appendChild(div);

const calcButtons = 'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) =';
calcButtons.split(' ').map(symbol => {
    div.insertAdjacentHTML('beforeend', `<button class="button" value="${symbol}">${symbol}</button>`);
});

let btnValues = document.querySelectorAll('.button');
console.log(btnValues.classList);

if (btnValues.value === '+') {
    btnValues.classList.add('button-plus', 'option-btn');
   
}


document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {        
        if (this.value === 'C') {
            output.innerHTML = '';
        } else if (this.value === 'CE') {
            output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
        } else {
            output.innerHTML += this.value;
        }

        const currentNum = output.value;
        console.log(currentNum);
        
        const moveNum = function () {
            oldNum = currentNum;
            currentNum = '';

        }
    });
});


