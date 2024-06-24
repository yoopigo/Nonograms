import { creatingElement, game } from './createElements';

let timerData = {
  timerValue: '00:00',
  winningTime: '',
};

let timerInterval;

function timer() {
  const time = creatingElement('p', 'game__timer');
  time.textContent = '00:00';
  game.appendChild(time);
  const gameCell = document.querySelectorAll('.game__cell');
  gameCell.forEach((element) => {
    element.addEventListener('click', startTimer);
  });
}

function startTimer() {
  if (!timerInterval) {
    timerData.timerValue = document.querySelector('.game__timer').innerText;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  let seconds = parseInt(document.querySelector('.game__timer').innerText.split(':')[1]);
  let minutes = parseInt(document.querySelector('.game__timer').innerText.split(':')[0]);
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  document.querySelector('.game__timer').innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  timerData.winningTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.querySelector('.game__timer').innerText = timerData.timerValue;
}

export { timer, stopTimer, startTimer, timerData };
