import React from 'react';
import PropTypes from 'prop-types';
import { ballWidth, ballHeight } from '../utils/constants';

const CannonBall = (props) => {
  const transform = `rotate(${props.rotation +90}, ${props.position.x}, ${props.position.y})`;

  return (
    <>
      <refs>
        <linearGradient id={'ballGradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
            <stop offset={'0%'} stopColor={'white'}/>
            <stop offset={'5%'} stopColor={'white'}/>
            <stop offset={'10%'} stopColor={'gold'} />
            <stop offset={'35%'} stopColor={'gold'} stopOpacity={0.8}/>
            <stop offset={'70%'} stopColor={'#444'} stopOpacity={0.6}/>
            <stop offset={'100%'} stopColor={'#222'}/>
        </linearGradient>
      </refs>
      <ellipse
        transform={transform}
        fill="url(#ballGradient)"
        cx={props.position.x}
        cy={props.position.y}
        rx={ballWidth}
        ry={ballHeight}
      />
    </>
  );
};

CannonBall.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default CannonBall;