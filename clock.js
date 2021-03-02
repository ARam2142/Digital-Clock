//make the code for the clock here
//get hours, minutes, seconds
const clock = document.getElementById('time');
let timeValue;
//get time methods

function makeTwoNumbers(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}

const runClock = () => {
    const today = new Date;
    let seconds = today.getSeconds();
    let minutes = today.getMinutes();
    let hours = today.getHours();
    
    seconds++;
    if (seconds == 60) {
        minutes++
    }

    if (minutes == 60) {
        hours++;
    }

    let AmOrPM = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12; //works cited: https://medium.com/front-end-weekly/how-to-convert-24-hours-format-to-12-hours-in-javascript-ca19dfd7419d

    clock.innerHTML = makeTwoNumbers(hours) + ": " + makeTwoNumbers(minutes) + ": " + makeTwoNumbers(seconds) + AmOrPM;
    let time = setInterval(runClock, 500)//worsk cited: w3 schools mini timing clock
}
runClock()

