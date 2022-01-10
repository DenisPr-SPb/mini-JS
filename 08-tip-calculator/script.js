
const output = document.querySelector('output')

const div = document.createElement('div');
div.classList.add('buttons__keyboard');
document.querySelector('.buttons__body').appendChild(div);

const calcButtons = 'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) =';

calcButtons.split(' ').map(symbol => {
    div.insertAdjacentHTML('beforeend', `<button class="button" value="${symbol}">${symbol}</button>`)
})

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        console.log(this.value);
       document.querySelector('.display__output').textContent += this.value;
       
    })
})