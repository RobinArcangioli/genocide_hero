import { calculateNextPosition } from '../utils/formulas';

const moveEnnemies = ennemies => (
  ennemies
    .filter(ennemy => (
      ennemy.position.y < 100
    ))
    .map((ennemy) => {
      const { x, y } = ennemy.position;
      return {
        ...ennemy,
        position: calculateNextPosition(x, y, 90, 10),
      };
    })
);

export default moveEnnemies;