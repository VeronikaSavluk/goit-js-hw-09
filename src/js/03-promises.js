import Notiflix from 'notiflix';

const form = document.querySelector(".form");

function onInputEvent(e) {
  e.preventDefault();
  form[e.target.name] = e.target.value;
  let delay = Number.parseFloat(form.delay.value);
  const step = Number.parseFloat(form.step.value);
  const amount = Number.parseFloat(form.amount.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  };
};
form.addEventListener("submit", onInputEvent);

function createPromise(position, delay) {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
};