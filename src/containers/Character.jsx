import React from 'react';
import char from '../images/character.png';

const Character = (props) => {
  const transform = `rotate(${props.rotation}, 0, 0)`;

  return (
    <g id="character" transform={transform}>
      <foreignObject x={-50} y={-50} width={101} height={67}>
          <img src={char} width='101' alt='char'/>
      </foreignObject>
    </g>
  );
};

export default Character;