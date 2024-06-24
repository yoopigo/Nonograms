import { addClickEventToCells } from './checkWin';
const clickSound = new Audio('../assets/click-left.wav');

function createRandomNonograms(nonogram) {
  const randomNonogram = nonogram[Math.floor(Math.random() * 5)];
  const gameContainer = document.querySelector('.game__playingField');
  gameContainer.innerHTML = '';
  console.log('1 - верно. 0 - неверно.');
  console.log(randomNonogram.data);

  const colHeaderRow = gameContainer.insertRow();
  colHeaderRow.insertCell();
  colHeaderRow.classList.add('game__hints-top');
  randomNonogram.colHints.forEach((hint) => {
    const cell = colHeaderRow.insertCell();
    hint.forEach((value, index) => {
      cell.appendChild(document.createTextNode(value));
      if (index < hint.length - 1) {
        cell.appendChild(document.createElement('br'));
      }
    });
    cell.classList.add('game__hint-top');
  });

  randomNonogram.data.forEach((rowData, rowIndex) => {
    const row = gameContainer.insertRow();
    if ((rowIndex + 1) % 5 === 0) {
      row.classList.add('game__row-thick-border');
    }

    row.classList.add('game__row');
    const hintCell = row.insertCell();
    hintCell.classList.add('game__hints-left');
    hintCell.appendChild(document.createTextNode(randomNonogram.rowHints[rowIndex].join(' ')));
    rowData.forEach((cell, colIndex) => {
      const cellElement = row.insertCell();

      cellElement.appendChild(document.createTextNode(cell === 1 ? '' : ''));
      cellElement.classList.add('game__cell');
      cellElement.classList.add(cell === 1 ? 'game__cell-right' : 'game__cell-wrong');

      cellElement.dataset.row = rowIndex;
      cellElement.dataset.col = colIndex;

      if ((colIndex + 1) % 5 === 0) {
        cellElement.classList.add('game__cell-thick-border');
      }
      cellElement.addEventListener('click', () => {
        if (cellElement.classList.contains('game__cell')) {
          cellElement.classList.remove('game__cell');
          cellElement.classList.add('game__cell--paint');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--paint')) {
          cellElement.classList.remove('game__cell--paint');
          cellElement.classList.add('game__cell');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--cross')) {
          cellElement.classList.remove('game__cell--cross');
          cellElement.classList.add('game__cell--paint');
          clickSound.play();
        }
      });

      cellElement.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        if (cellElement.classList.contains('game__cell--paint')) {
          cellElement.classList.remove('game__cell--paint');
          cellElement.classList.add('game__cell--cross');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell')) {
          cellElement.classList.remove('game__cell');
          cellElement.classList.add('game__cell--cross');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--cross')) {
          cellElement.classList.remove('game__cell--cross');
          cellElement.classList.add('game__cell');
          clickSound.play();
        }
      });
    });
  });
  addClickEventToCells();
}

function createNonograms(nonogram) {
  const gameContainer = document.querySelector('.game__playingField');
  gameContainer.innerHTML = '';
  console.log('1 - верно. 0 - неверно.');
  console.log(nonogram.data);

  const colHeaderRow = gameContainer.insertRow();
  colHeaderRow.insertCell();
  colHeaderRow.classList.add('game__hints-top');
  nonogram.colHints.forEach((hint, index) => {
    const cell = colHeaderRow.insertCell();
    hint.forEach((value, index) => {
      cell.appendChild(document.createTextNode(value));
      if (index < hint.length - 1) {
        cell.appendChild(document.createElement('br'));
      }
    });
    cell.classList.add('game__hint-top');
    if ((index + 1) % 5 === 0) {
      cell.classList.add('game__cell-thick-border');
    }
  });

  console.log(colHeaderRow);

  nonogram.data.forEach((rowData, rowIndex) => {
    const row = gameContainer.insertRow();
    if ((rowIndex + 1) % 5 === 0) {
      row.classList.add('game__row-thick-border');
    }
    row.classList.add('game__row');
    const hintCell = row.insertCell();
    hintCell.classList.add('game__hints-left');
    hintCell.appendChild(document.createTextNode(nonogram.rowHints[rowIndex].join(' ')));
    rowData.forEach((cell, colIndex) => {
      const cellElement = row.insertCell();

      cellElement.appendChild(document.createTextNode(cell === 1 ? '' : ''));
      cellElement.classList.add('game__cell');
      cellElement.classList.add(cell === 1 ? 'game__cell-right' : 'game__cell-wrong');

      cellElement.dataset.row = rowIndex;
      cellElement.dataset.col = colIndex;

      if ((colIndex + 1) % 5 === 0) {
        cellElement.classList.add('game__cell-thick-border');
      }

      cellElement.addEventListener('click', () => {
        if (cellElement.classList.contains('game__cell')) {
          cellElement.classList.remove('game__cell');
          cellElement.classList.add('game__cell--paint');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--paint')) {
          cellElement.classList.remove('game__cell--paint');
          cellElement.classList.add('game__cell');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--cross')) {
          cellElement.classList.remove('game__cell--cross');
          cellElement.classList.add('game__cell--paint');
          clickSound.play();
        }
      });

      cellElement.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        if (cellElement.classList.contains('game__cell--paint')) {
          cellElement.classList.remove('game__cell--paint');
          cellElement.classList.add('game__cell--cross');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell')) {
          cellElement.classList.remove('game__cell');
          cellElement.classList.add('game__cell--cross');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--cross')) {
          cellElement.classList.remove('game__cell--cross');
          cellElement.classList.add('game__cell');
          clickSound.play();
        }
      });
    });
  });
}

function createRandomNonogramsAll(nonogram) {
  const randomNonogram = nonogram[Math.floor(Math.random() * nonogram.length)];
  const gameContainer = document.querySelector('.game__playingField');
  gameContainer.innerHTML = '';
  console.log('1 - верно. 0 - неверно.');
  console.log(randomNonogram.data);

  const colHeaderRow = gameContainer.insertRow();
  colHeaderRow.insertCell();
  colHeaderRow.classList.add('game__hints-top');
  randomNonogram.colHints.forEach((hint) => {
    const cell = colHeaderRow.insertCell();
    hint.forEach((value, index) => {
      cell.appendChild(document.createTextNode(value));
      if (index < hint.length - 1) {
        cell.appendChild(document.createElement('br'));
      }
    });
    cell.classList.add('game__hint-top');
  });

  randomNonogram.data.forEach((rowData, rowIndex) => {
    const row = gameContainer.insertRow();
    if ((rowIndex + 1) % 5 === 0) {
      row.classList.add('game__row-thick-border');
    }

    row.classList.add('game__row');
    const hintCell = row.insertCell();
    hintCell.classList.add('game__hints-left');
    hintCell.appendChild(document.createTextNode(randomNonogram.rowHints[rowIndex].join(' ')));
    rowData.forEach((cell, colIndex) => {
      const cellElement = row.insertCell();

      cellElement.appendChild(document.createTextNode(cell === 1 ? '' : ''));
      cellElement.classList.add('game__cell');
      cellElement.classList.add(cell === 1 ? 'game__cell-right' : 'game__cell-wrong');

      cellElement.dataset.row = rowIndex;
      cellElement.dataset.col = colIndex;

      if ((colIndex + 1) % 5 === 0) {
        cellElement.classList.add('game__cell-thick-border');
      }
      cellElement.addEventListener('click', () => {
        if (cellElement.classList.contains('game__cell')) {
          cellElement.classList.remove('game__cell');
          cellElement.classList.add('game__cell--paint');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--paint')) {
          cellElement.classList.remove('game__cell--paint');
          cellElement.classList.add('game__cell');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--cross')) {
          cellElement.classList.remove('game__cell--cross');
          cellElement.classList.add('game__cell--paint');
          clickSound.play();
        }
      });

      cellElement.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        if (cellElement.classList.contains('game__cell--paint')) {
          cellElement.classList.remove('game__cell--paint');
          cellElement.classList.add('game__cell--cross');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell')) {
          cellElement.classList.remove('game__cell');
          cellElement.classList.add('game__cell--cross');
          clickSound.play();
        } else if (cellElement.classList.contains('game__cell--cross')) {
          cellElement.classList.remove('game__cell--cross');
          cellElement.classList.add('game__cell');
          clickSound.play();
        }
      });
    });
  });
  addClickEventToCells();
}

export { createRandomNonograms, createNonograms, createRandomNonogramsAll };
