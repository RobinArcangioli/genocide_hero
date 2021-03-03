import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Ground = () => {
  const division = {
    stroke: '#fff',
    strokeWidth: '1px',
  };

  const groundWidth = skyAndGroundWidth;

  return (
    <g id="ground">
      <refs>
        <linearGradient id={'groundGradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
            <stop offset={'0%'} stopColor={'white'}/>
            <stop offset={'15%'} stopColor={'#3d424e'}/>
            <stop offset={'30%'} stopColor={'#3d424e'}/>
            <stop offset={'70%'} stopColor={'#282c34'}/>
            <stop offset={'100%'} stopColor={'#282c34'}/>
        </linearGradient>
      </refs>
      <rect
        id="ground-2"
        data-name="ground"
        fill="url(#groundGradient)"
        x={groundWidth / -2}
        y={-10}
        width={groundWidth}
        height={110}
      />
      <line
        x1={groundWidth / -2}
        y1={-10}
        x2={groundWidth / 2}
        y2={-10}
        style={division}
      />
    </g>
  );
};

export default Ground;