function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let isActive = false;
let id = 0;

document.querySelector('[data-start]').addEventListener('click', () => {
  if (!isActive) {
    isActive = true;
    id = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
});

document.querySelector('[data-stop]').addEventListener('click', () => {
  clearInterval(id);
  isActive = false;
});
