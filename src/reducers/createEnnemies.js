import {
    createInterval, maxEnnemies, gameHeight, ennemiesStartPositions
  } from '../utils/constants';
  
  const createEnnemies = state => {
    const now = (new Date()).getTime();
    const { lastEnnemyCreatedAt, ennemies } = state.gameState;
    const createNewObject = (
      now - (lastEnnemyCreatedAt).getTime() > createInterval &&
      ennemies.length < maxEnnemies
    );
  
    if ( ! createNewObject) return state;
  
    const id = (new Date()).getTime();
    const predefinedPosition = Math.floor(Math.random() * ennemiesStartPositions.length);
    const ennemyPosition = ennemiesStartPositions[predefinedPosition];
    const newEnnemy = {
      position: {
        x: ennemyPosition,
        y: -gameHeight,
      },
      createdAt: (new Date()).getTime(),
      id,
    };
  
    return {
      ...state,
      gameState: {
        ...state.gameState,
        ennemies: [
          ...state.gameState.ennemies,
          newEnnemy
        ],
        lastEnnemyCreatedAt: new Date(),
      }
    }
  }

  export default createEnnemies;