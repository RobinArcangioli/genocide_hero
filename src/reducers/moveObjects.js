import { calculateAngle } from '../utils/formulas';
import createEnnemies from './createEnnemies';
import moveCannonBalls from './moveCannonBalls';
import moveEnnemies from './moveEnnemies';
import checkCollisions from './checkCollisions';

function moveObjects(state, action) {
  if (state.gameState.step !== 1) return state;

  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  };

  let lifeLost = false;
  state.gameState.ennemies.forEach(ennemy => {
    if(ennemy.position.y > 100){
      lifeLost = true;
      return;
    }
  });

  let lives = state.gameState.lives;
  if(lifeLost) lives--;

  const newState = createEnnemies(state);
  let ennemies = moveEnnemies(newState.gameState.ennemies);

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  let cannonBalls = moveCannonBalls(state.gameState.cannonBalls);

  const objectsDestroyed = checkCollisions(cannonBalls, ennemies);
  const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));
  const ennemiesDestroyed = objectsDestroyed.map(object => (object.ennemyId));

  cannonBalls = cannonBalls.filter(cannonBall => (cannonBallsDestroyed.indexOf(cannonBall.id)));
  ennemies = ennemies.filter(ennemy => (ennemiesDestroyed.indexOf(ennemy.id)));

  const kills = state.gameState.kills + ennemiesDestroyed.length;

  return {
    ...newState,
    gameState : {
      ...newState.gameState,
      ennemies,
      cannonBalls,
      lives,
      kills,
    },
    angle,
  };
}

export default moveObjects;