import { creatingElement, gameElements } from './createElements';

function saveGame() {
  const saveButton = creatingElement('button', 'game__elements-save-button');
  saveButton.textContent = 'Save game';
  gameElements.appendChild(saveButton);

  saveButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.game__cell, .game__cell--paint, .game__cell--cross');
    const gameState = [];

    cells.forEach((cell) => {
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      gameState.push({ row, col, value: cell.classList.contains('game__cell--paint') ? 1 : cell.classList.contains('game__cell--cross') ? 2 : 0 });
    });

    localStorage.setItem('gameState', JSON.stringify(gameState));
    console.log(gameState);
  });
}

function updateCellClass(cell, value) {
  cell.classList.remove('game__cell', 'game__cell--cross', 'game__cell--paint');

  if (value === 1) {
    cell.classList.add('game__cell--paint');
  } else if (value === 2) {
    cell.classList.add('game__cell--cross');
  } else {
    cell.classList.add('game__cell');
  }
}

function loadGame() {
  const loadButton = creatingElement('button', 'game__elements-load-button');
  loadButton.textContent = 'Load game';
  gameElements.appendChild(loadButton);

  loadButton.addEventListener('click', () => {
    const savedGameState = localStorage.getItem('gameState');

    if (savedGameState) {
      const loadedGameState = JSON.parse(savedGameState);
      console.log(loadedGameState);

      const cells = document.querySelectorAll('.game__cell, .game__cell--paint, .game__cell--cross');
      cells.forEach((cell) => {
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        const savedCellState = loadedGameState.find((state) => state.row === row && state.col === col);

        if (savedCellState) {
          updateCellClass(cell, savedCellState.value);
        }
      });
    }
  });
}

export { saveGame, loadGame };
