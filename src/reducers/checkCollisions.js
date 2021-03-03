import { checkCollision } from '../utils/formulas';
import { ennemyWidth, ennemyHeight, ballWidth, ballHeight } from '../utils/constants';

const checkCollisions = (cannonBalls, ennemies) => {
  const objectsDestroyed = [];
  ennemies.forEach((ennemy) => {
    const rectA = {
      x1: ennemy.position.x + ennemyWidth * 1 / 7,
      y1: ennemy.position.y + ennemyHeight * 1 / 7,
      x2: ennemy.position.x + ennemyWidth * 6 / 7,
      y2: ennemy.position.y + ennemyHeight * 6 / 7,
    };
    cannonBalls.forEach((cannonBall) => {
      const rectB = {
        x1: cannonBall.position.x,
        y1: cannonBall.position.y,
        x2: cannonBall.position.x + ballWidth,
        y2: cannonBall.position.y + ballHeight,
      };
      if (checkCollision(rectA, rectB)) {
        objectsDestroyed.push({
          cannonBallId: cannonBall.id,
          ennemyId: ennemy.id,
        });
      }
    });
  });
  return objectsDestroyed;
};

export default checkCollisions;