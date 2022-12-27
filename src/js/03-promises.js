import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

Notiflix.Notify.init({ position: 'right-bottom' });

function createPromise({ position, delay }) {
  return new Promise((resolve, reject) => {
    setTimeout(
      ({ position, delay }) => {
        const shouldResolve = Math.random() > 0.3;

        if (shouldResolve) {
          resolve({ position, delay });
        }

        reject({ position, delay });
      },
      delay,
      { position, delay }
    );
  });
}

function formSubmit(event) {
  event.preventDefault();

  const length = +document.querySelector("input[name='amount']").value;
  const step = +document.querySelector("input[name='step']").value;
  const delay = +document.querySelector("input[name='delay']").value;

  for (let i = 0; i < length; i++) {
    createPromise({ position: i + 1, delay: delay + i * step })
      .then(onSucces)
      .catch(onError);
  }
}

function onSucces({ position, delay }) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}

document.querySelector('.form').addEventListener('submit', formSubmit);
