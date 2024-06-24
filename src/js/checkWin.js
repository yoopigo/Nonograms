import { createModal } from './modal';
import { stopTimer } from './timer';

const winSound = new Audio('../assets/win.wav');

function checkWin() {
  const correctCell = document.querySelectorAll('.game__cell-right');
  const cellPaint = document.querySelectorAll('.game__cell--paint');
  const filledCorrectCells = document.querySelectorAll('.game__cell-right.game__cell--paint');

  if (correctCell.length === filledCorrectCells.length && correctCell.length === cellPaint.length) {
    stopTimer();
    createModal();
    winSound.play();
  }
}

function addClickEventToCells() {
  const cells = document.querySelectorAll('.game__cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      checkWin();
    });
  });
}

export { checkWin, addClickEventToCells };
