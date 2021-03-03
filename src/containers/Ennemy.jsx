import React from 'react';
import PropTypes from 'prop-types';
import ennemy1 from '../images/flyingBird-png/frame-1.png';
import ennemy2 from '../images/flyingBird-png/frame-2.png';
import ennemy3 from '../images/flyingBird-png/frame-3.png';
import ennemy4 from '../images/flyingBird-png/frame-4.png';
import { ennemyWidth, ennemyHeight } from '../utils/constants';

const Ennemy = (props) => {
  const lifeTime = new Date().getTime() - props.createdAt;
  const transform = (lifeTime % 1400 > 700? "" : `translate(${props.position.x * 2 + 88},0) scale(-1, 1)`);

  const frame = lifeTime % 800;
  const ennemy = 
    frame < 200 ? ennemy1 :
    frame - 200 < 200 ? ennemy2 :
    frame - 400 < 200 ? ennemy3 :
    ennemy4;

  return (
    <g id="ennemy" transform={transform}>
      <foreignObject x={props.position.x} y={props.position.y} width={ennemyWidth} height={ennemyHeight}>
          <img src={ennemy} width={ennemyWidth} alt='ennemy'/>
      </foreignObject>
    </g>
  );
};

Ennemy.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Ennemy;