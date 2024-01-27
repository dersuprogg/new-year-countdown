const daysSpan = document.querySelector(".days");
const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const expireDateInput = document.querySelector(".expire-date");

function getDiffTime(then) {
  return then - new Date().getTime();
}

// const newYear = new Date("January 1, 2024 00:00:00");

function getProcessedTimestamp(timestamp) {
  return {
    days: Math.floor(timestamp / 1000 / 60 / 60 / 24),
    hours: Math.floor(timestamp / 1000 / 60 / 60) % 24,
    minutes: Math.floor(timestamp / 1000 / 60) % 60,
    seconds: Math.floor(timestamp / 1000) % 60,
  };
}

const newYear = new Date("January 1, 2025 00:00:00");

function renderTime() {
  const timestampDiff = getDiffTime(newYear);
  const { days, hours, minutes, seconds } =
    getProcessedTimestamp(timestampDiff);
  daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;
}

renderTime();
setInterval(renderTime, 1000);
