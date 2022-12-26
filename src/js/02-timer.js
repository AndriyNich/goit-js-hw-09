import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.5.min.css';

Notiflix.Notify.init({});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDate(selectedDates[0].getTime());
  },
};

const refs = {
  dateTimePicker: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  outDays: document.querySelector('[data-days]'),
  outHours: document.querySelector('[data-hours]'),
  outMinutes: document.querySelector('[data-minutes]'),
  outSeconds: document.querySelector('[data-seconds]'),
};

const value = {
  selectedDateTime: 0,
  lastTime: 0,
  intervalID: -1,
};

function convertMs(ms) {
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
}

flatpickr(refs.dateTimePicker, options);

// перевірка дати на валідність, вивід повідомлення, активація/деактивація кнопки, відображення нового інтервалу
function checkDate(selectedDates) {
  const currentDateTime = new Date().getTime();
  value.selectedDateTime = selectedDates;

  stopInterval();

  if (currentDateTime >= value.selectedDateTime) {
    Notiflix.Notify.failure('Please choose a date in the future.');
    showDateTime(0);
    setDisabled(true);
    return false;
  }

  value.lastTime = value.selectedDateTime - currentDateTime;
  showDateTime(value.lastTime);
  setDisabled(false);
  return true;
}

// вставновлення/зняття доступності кнопки Start
function setDisabled(val) {
  if (val) {
    refs.btnStart.setAttribute('disabled', 'true');
  } else {
    refs.btnStart.removeAttribute('disabled');
  }
}

setDisabled(true);

refs.btnStart.addEventListener('click', startTimer);

// запуск таймеру
function startTimer() {
  if (value.intervalID > 0) {
    Notiflix.Notify.failure(
      'The timer is already activated. Choose another date to stop the current timer'
    );
    return;
  }

  if (!checkDate(value.selectedDateTime)) return;

  showDateTime(value.lastTime);

  value.intervalID = setInterval(stepInterval, 1000);
}

// виконання кроку інтервалу
function stepInterval() {
  value.lastTime -= 1000;
  showDateTime(value.lastTime);
  if (value.lastTime <= 1000) stopInterval();
}

// зупинка таймеру
function stopInterval() {
  if (value.intervalID > 0) {
    clearInterval(value.intervalID);
    value.intervalID = 0;
  }
}

// відображення таймеру на сторінку
function showDateTime(dtm) {
  const { days, hours, minutes, seconds } = convertMs(dtm);
  refs.outDays.textContent = addLeadingZero(days);
  refs.outHours.textContent = addLeadingZero(hours);
  refs.outMinutes.textContent = addLeadingZero(minutes);
  refs.outSeconds.textContent = addLeadingZero(seconds);
}

// доповнення до 2-х символів
function addLeadingZero(val) {
  return String(val).padStart(2, 0);
}
