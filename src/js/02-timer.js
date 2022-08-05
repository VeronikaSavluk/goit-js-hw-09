import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector("button[data-start]");
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      startBtn.disabled = false;
    } else {
      Notiflix.Notify.failure("Please choose a date in the future");
    }
    console.log(selectedDates[0]);
},
};

flatpickr("#datetime-picker", options);
const inputEl = document.querySelector("#datetime-picker")._flatpickr;
const timerEl = document.querySelector(".timer");
const timerValueBoxes = document.querySelectorAll(".field");
const timerValueSpans = document.querySelectorAll("span.value");
const timerLabelSpans = document.querySelectorAll("span.label");
const boxOfDays = document.querySelector("span[data-days]");
const boxOfHours = document.querySelector("span[data-hours]");
const boxOfMinutes = document.querySelector("span[data-minutes]");
const boxOfSeconds = document.querySelector("span[data-seconds]");
let timer = null;

timerEl.style.display = "flex";
for (let i = 1; i < timerValueBoxes.length; i += 1) {
  timerValueBoxes[i].style.marginLeft = "15px";
};
timerValueSpans.forEach(span => {
  span.style.display = "block";
  span.style.textAlign = "center";
  span.style.fontSize = "30px";
  });
timerLabelSpans.forEach(span => {
  span.style.display = "block";
  span.style.textAlign = "center";
  span.style.fontSize = "12px";
  span.style.textTransform = "uppercase";
});

function onStartBtnClick(event){
  startBtn.disabled = true;

  timer = setInterval(() => {
    const currentTime = new Date();
    const futureTime = inputEl.selectedDates[0];
    if (futureTime.getTime() >= currentTime.getTime(futureTime)) {
      const deltaTime = futureTime.getTime() - currentTime.getTime();
      const timerComponents = convertMs(deltaTime);
      boxOfDays.textContent = addLeadingZero(timerComponents.days);
      boxOfHours.textContent = addLeadingZero(timerComponents.hours);
      boxOfMinutes.textContent = addLeadingZero(timerComponents.minutes);
      boxOfSeconds.textContent = addLeadingZero(timerComponents.seconds);
    } else {
    clearInterval(timer);
    };
  }, 1000);
};
startBtn.addEventListener("click", onStartBtnClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
};