import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
      return;
    }
  },
};

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let intervalId;

flatpickr(datetimePicker, options);

function startCountdown(targetDate) {
  clearInterval(intervalId); 

  intervalId = setInterval(updateTimer, 1000);

  function updateTimer() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(intervalId); 
      startButton.disabled = true;
    } else {
      const time = convertMs(timeDifference);
      daysValue.textContent = addLeadingZero(time.days);
      hoursValue.textContent = addLeadingZero(time.hours);
      minutesValue.textContent = addLeadingZero(time.minutes);
      secondsValue.textContent = addLeadingZero(time.seconds);
    }
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}


startButton.addEventListener('click', () => {
  const selectedDate = datetimePicker._flatpickr.selectedDates[0]; 

  if (selectedDate) {
    startCountdown(selectedDate);
  }
});
