import { creatingElement, gameElements } from './createElements';

function solutionGame() {
  const solutionButton = creatingElement('button', 'game__elements-solution-button');
  solutionButton.textContent = 'Solution';
  gameElements.appendChild(solutionButton);

  solutionButton.addEventListener('click', () => {
    applySolution();
  });
}

function applySolution() {
  const cellRight = document.querySelectorAll('.game__cell-right');
  const cell = document.querySelectorAll('.game__cell--cross, .game__cell--paint');

  cell.forEach((element) => {
    element.classList.remove('game__cell--cross', 'game__cell--paint');
  });

  cellRight.forEach((element) => {
    element.classList.add('game__cell--solution');
  });
}
export { solutionGame };
