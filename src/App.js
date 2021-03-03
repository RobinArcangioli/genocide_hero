import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './containers/Canvas';
import InitScreen from './containers/InitScreen';
import './App.css';
import ScoreBoard from './containers/ScoreBoard';

class App extends Component {
  componentDidMount() {
    setInterval(() => {
        this.props.moveObjects(this.canvasMousePosition);
    }, 20);
    
    setInterval(() => {
        this.props.shoot(this.canvasMousePosition)
    }, 100);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    if(this.props.gameState.lives === 0) this.props.gameState.step = 2;

    return (
      this.props.gameState.step === 0 ?
        <InitScreen
          startGame={this.props.startGame}
        />
      : this.props.gameState.step === 1 ?
        <Canvas
          angle={this.props.angle}
          gameState={this.props.gameState}
          trackMouse={event => (this.trackMouse(event))}
        />
      :
        <ScoreBoard
          startGame={this.props.startGame}
          score={this.props.gameState.kills}
          time={new Date()}
        />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    ennemies: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;