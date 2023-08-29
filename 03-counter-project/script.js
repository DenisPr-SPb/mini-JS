const plus = document.querySelector('.btn-incriment');
const minus = document.querySelector('.btn-dicriment');
const sum = document.querySelector('.counter__sum')

let count = 0;

plus.onclick = function () {
    count ++;
    sum.innerHTML = count.toString();
}

minus.onclick = function () {
    count --;
    sum.innerHTML = count.toString();
}