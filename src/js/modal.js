import { body, creatingElement, modalOverlay } from './createElements';
import { timerData } from './timer';
import { createRandomNonograms } from './createNonograms';
import { nonograms } from './templates';
import { startTimer, stopTimer } from './timer';

function createModal() {
  const modal = creatingElement('div', 'modal');
  const modalText = creatingElement('p', 'modal__text');
  modalText.textContent = `Great! You have solved the nonogram in ${timerData.winningTime} seconds!`;
  modal.appendChild(modalText);
  body.appendChild(modal);
  body.appendChild(modalOverlay);

  const resetButtonModal = creatingElement('button', 'modal__button-reset');
  resetButtonModal.textContent = 'Restart game';
  modal.appendChild(resetButtonModal);

  resetButtonModal.addEventListener('click', () => {
    const GamepelayingField = document.querySelector('.game__playingField');
    if (modal) {
      modal.remove();
      modalOverlay.remove();
      GamepelayingField.innerHTML = '';
      createRandomNonograms(nonograms);
      stopTimer();
      startTimer();
    }
  });
}

function modalRemove() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.remove();
  }
}

export { createModal, modalRemove };
