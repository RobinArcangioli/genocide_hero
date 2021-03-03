import { calculateNextPosition } from '../utils/formulas';
import { skyAndGroundWidth } from '../utils/constants'

const moveCannonBalls = cannonBalls => (
  cannonBalls
    .filter(cannonBall => (
      cannonBall.position.y > -1100 && cannonBall.position.x > -skyAndGroundWidth/2 && cannonBall.position.x < skyAndGroundWidth/2
    ))
    .map((cannonBall) => {
      const { x, y } = cannonBall.position;
      const { angle } = cannonBall;
      return {
        ...cannonBall,
        position: calculateNextPosition(x, y, angle, 3),
      };
    })
);

export default moveCannonBalls;