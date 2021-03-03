import { MOVE_OBJECTS, SHOOT, START_GAME } from '../actions';
import moveObjects from './moveObjects';
import shoot from './shoot';
import startGame from './startGame';

const initialGameState = {
  step: 0, //0: initScreen, 1: playing, 2: scoreBoard
  kills: 0,
  lives: 3,
  ennemies: [],
  lastEnnemyCreatedAt: new Date(),
  cannonBalls: [],
};

const initialState = {
  angle: -90,
  gameState: initialGameState
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case SHOOT:
      return shoot(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;