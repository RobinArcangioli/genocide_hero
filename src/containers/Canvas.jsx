
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import Character from './Character'
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import Clock from './Clock';
import Ennemy from './Ennemy'
import Lives from './Lives';
import { gameHeight } from '../utils/constants';

class Canvas extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewBox: [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight],
    }
  }
  
  componentDidMount(){
    window.onresize = () => {
      const cnv = document.getElementById('genocideHeroCanvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  componentWillUnmount(){
    window.onresize = () => {};
    window.onresize();
  }

  render(){
    return (
      <svg
        id='genocideHeroCanvas'
        preserveAspectRatio="xMaxYMax none"
        onMouseMove={this.props.trackMouse}
        viewBox={this.state.viewBox}
      >
        <Sky />
        <Ground />
        <Clock time={new Date()} />
        <CurrentScore score={this.props.gameState.kills} />
        <Lives lives={this.props.gameState.lives}/>
        {this.props.gameState.cannonBalls.map(cannonBall => (
          <CannonBall
            key={cannonBall.id}
            position={cannonBall.position}
            rotation={cannonBall.angle}
          />
        ))}
        <Character rotation={this.props.angle} />
        {this.props.gameState.ennemies.map(ennemy => (
          <Ennemy
            key={ennemy.id}
            position={ennemy.position}
            createdAt={ennemy.createdAt}
          />
        ))}
      </svg>
    );
  }
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
      kills: PropTypes.number.isRequired,
      lives: PropTypes.number.isRequired,
    }).isRequired,
    ennemies: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
    trackMouse: PropTypes.func.isRequired,
  };
  
  export default Canvas;