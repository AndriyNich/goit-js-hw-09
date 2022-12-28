function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let id = 0;

const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

function btnSwitcher(isStart) {
  if (isStart) {
    refs.btnStart.setAttribute('disabled', 'true');
    refs.btnStop.removeAttribute('disabled');
  } else {
    refs.btnStart.removeAttribute('disabled');
    refs.btnStop.setAttribute('disabled', 'true');
  }
}

refs.btnStart.addEventListener('click', () => {
  id = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnSwitcher(true);
});

refs.btnStop.addEventListener('click', () => {
  clearInterval(id);
  btnSwitcher(false);
});

btnSwitcher(false);
