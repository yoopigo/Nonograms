import { createRandomNonogramsAll } from './createNonograms';
import { creatingElement, gameElements } from './createElements';
import { nonograms } from './templates';
import { stopTimer, timer } from './timer';

function randomGameStart() {
  const randomButton = creatingElement('button', 'game__elements-random-button');
  randomButton.textContent = 'Random game';
  gameElements.appendChild(randomButton);

  randomButton.addEventListener('click', () => {
    randomGame();
  });
}

function randomGame() {
  const gamePlayingField = document.querySelector('.game__playingField');
  gamePlayingField.innerHTML = '';
  createRandomNonogramsAll(nonograms);
  stopTimer();
  const timerCheck = document.querySelector('.game__timer');
  if (timerCheck) {
    timerCheck.remove();
    timer();
  }
}

export { randomGameStart };
