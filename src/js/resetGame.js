import { creatingElement, gameElements } from './createElements';
import { stopTimer, timer } from './timer';
import { modalRemove } from './modal';

function resetGame() {
  const resetButton = creatingElement('button', 'game__elements-reset-button');
  resetButton.textContent = 'Reset game';
  gameElements.appendChild(resetButton);

  resetButton.addEventListener('click', () => {
    const filledCells = document.querySelectorAll('.game__cell--paint, .game__cell--cross, .game__cell--solution');

    filledCells.forEach((element) => {
      element.classList.remove('game__cell--paint');
      element.classList.remove('game__cell--cross');
      element.classList.remove('game__cell--solution');
      if (!element.classList.contains('game__cell')) {
        element.classList.add('game__cell');
      }
    });
    stopTimer();
    modalRemove();
    const timerCheck = document.querySelector('.game__timer');
    if (timerCheck) {
      timerCheck.remove();
      timer();
    }
  });
}

export { resetGame };
