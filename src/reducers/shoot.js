import { calculateAngle } from '../utils/formulas';

function shoot(state, action) {
  const { cannonBalls } = state.gameState;

  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  };
  
  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  const id = (new Date()).getTime();
  const cannonBall = {
    position: { x: 0, y: 0 },
    angle,
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      cannonBalls: [...cannonBalls, cannonBall],
    }
  };
}

export default shoot;