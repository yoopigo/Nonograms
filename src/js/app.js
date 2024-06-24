import '../style/style.scss';

import { body, game, playingField, gameElements } from './createElements';
import { nonograms } from './templates';
import { createRandomNonograms } from './createNonograms';
import { resetGame } from './resetGame';
import { timer } from './timer';
import { saveGame, loadGame } from './saveGame';

import { gameSelection } from './gameSelection';
import { solutionGame } from './solutionGame';
import { randomGameStart } from './randomGameStart';

body.appendChild(game);
game.appendChild(playingField);
game.appendChild(gameElements);
createRandomNonograms(nonograms);
gameSelection(nonograms);
randomGameStart();
resetGame();
saveGame();
loadGame();
solutionGame();
timer();
alert(
  'Привет. Прошу сразу прощения за просьбу, но если есть возможность проверь в последний день. Не успеваю, но хотелось бы реализовать больше фукнционала. Спасбио С:',
);
