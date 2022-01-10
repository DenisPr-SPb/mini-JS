const setYear = +document.querySelector('.set-year').value;
const setMonth = +document.querySelector('.set-month').value -1;
const setDay = +document.querySelector('.set-day').value;
const setHour = +document.querySelector('.set-hour').value;
const setMinute = +document.querySelector('.set-minute').value;
// const setSecond = +document.querySelector('.set-second').value;
console.log(setYear,setMonth,setDay,setHour,setMinute);

const setNewDate = new Date (`${setYear}`, `${setMonth}`, `${setDay}`, `${setHour}`, `${setMinute}`)

console.log(setNewDate);





const countdownFunc = () => {
    const nowTime = new Date();
    // console.log(nowTime);
    const timeLeft = setNewDate - nowTime;
    // console.log(timeLeft);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector('.days__left').innerHTML = days;
    document.querySelector('.hours__left').innerHTML = hours;
    document.querySelector('.minutes__left').innerHTML = minutes;
    document.querySelector('.seconds__left').innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(countdownFunc);
        document.querySelector('.days__left').innerHTML = '*';
        document.querySelector('.hours__left').innerHTML = 'E';
        document.querySelector('.minutes__left').innerHTML = 'N';
        document.querySelector('.seconds__left').innerHTML = 'D';
    }
   
}
setInterval(countdownFunc, 1000)

// function btnStart () {
//     setInterval(countdownFunc, 1000)
// }
