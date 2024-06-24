import { creatingElement, gameElements } from './createElements';
import { createNonograms } from './createNonograms';
import { addClickEventToCells } from './checkWin';
import { modalRemove } from './modal';
import { timer, stopTimer } from './timer';

function gameSelection(template) {
  const nonogramSelect = creatingElement('select', 'game__elements-selectedNonograms');
  const defaultOption = creatingElement('option', 'game__elements-default-option');
  defaultOption.value = '-1';
  defaultOption.textContent = 'Select a nonogram to play';
  nonogramSelect.appendChild(defaultOption);
  gameElements.appendChild(nonogramSelect);

  const nonogramsSize = {
    '5x5': [],
    '10x10': [],
    '15x15': [],
  };

  template.forEach((element) => {
    if (element.size === '5x5') {
      nonogramsSize['5x5'].push(element);
    } else if (element.size === '10x10') {
      nonogramsSize['10x10'].push(element);
    } else if (element.size === '15x15') {
      nonogramsSize['15x15'].push(element);
    }
  });

  for (const size in nonogramsSize) {
    const sublist = creatingElement('optgroup', `game__elements-${size}`);
    sublist.label = `${size} Nonograms`;
    nonogramsSize[size].forEach((nonogram) => {
      const option = creatingElement('option', 'game__elements-nonogram-option');
      option.value = nonogram.name;
      option.textContent = nonogram.name;
      sublist.appendChild(option);
    });
    nonogramSelect.appendChild(sublist);
  }

  nonogramSelect.addEventListener('change', () => {
    const selectedNonogram = template.find((element) => {
      return element.name === nonogramSelect.value;
    });
    if (selectedNonogram) {
      createNonograms(selectedNonogram);
      addClickEventToCells();
      modalRemove();
      stopTimer();
      const timerCheck = document.querySelector('.game__timer');
      if (timerCheck) {
        timerCheck.remove();
        timer();
      }
    }
  });
}

export { gameSelection };
