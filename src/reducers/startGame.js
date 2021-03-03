const startGame = (state, initialGameState) => {
    return {
        ...state,
        gameState: {
        ...initialGameState,
        step: 1,
        }
    }
};

export default startGame;