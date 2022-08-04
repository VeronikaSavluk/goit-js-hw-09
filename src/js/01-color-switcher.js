const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timerChangeColorBody = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(event) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerChangeColorBody = setInterval(function() { body.style.backgroundColor = getRandomHexColor() }, 1000);
};

function onStopBtnClick(event) {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerChangeColorBody);
};
console.log(body);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

