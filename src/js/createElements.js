function creatingElement(selector, className) {
  const element = document.createElement(selector);
  element.classList.add(className);
  return element;
}

const body = document.querySelector('body');
const game = creatingElement('main', 'game');
const playingField = creatingElement('table', 'game__playingField');
const modalOverlay = creatingElement('div', 'modal-overlay');
const gameElements = creatingElement('div', 'game__elements');

export { creatingElement, body, game, modalOverlay, playingField, gameElements };
