export const MOVE_OBJECTS = 'MOVE_OBJECTS';

export const SHOOT = 'SHOOT';

export const START_GAME = 'START_GAME';

export const startGame = () => ({
  type: START_GAME,
});

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const shoot = (mousePosition) => ({
  type: SHOOT,
  mousePosition,
});