/*let [seconds,minutes,hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer=null;
function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h = hours < 10 ?"0" + hours : hours;
    let m = minutes < 10 ?"0" + minutes : minutes;
    let s = seconds < 10 ?"0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s;
}
function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);

}
function watchStop(){
        clearInterval(timer);
    }
function watchReset(){
        clearInterval(timer);
        [seconds,minutes,hours] = [0,0,0];
        displayTime.innerHTML = "00:00:00";
}*/
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    let sec = seconds < 10 ? '0' + seconds : seconds;
    let min = minutes < 10 ? '0' + minutes : minutes;
    let hr = hours < 10 ? '0' + hours : hours;
    display.textContent = [hr]+ ":"+[min]+":" +[sec];
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay(); // Initialize display

    
    


