import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const Sky = () => {
  const skyWidth = skyAndGroundWidth;
  const gameHeight = 1200;
  return (
    <>
      <defs>
        <linearGradient id={'skyGradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
          <stop offset={'0%'} stopColor={'black'} stopOpacity={1}/>
          <stop offset={'10%'} stopColor={'#440000'} stopOpacity={1}/>
          <stop offset={'70%'} stopColor={'#880000'} stopOpacity={1}/>
          <stop offset={'100%'} stopColor={'red'} stopOpacity={0.8}/>
        </linearGradient>
      </defs>
        <rect
          fill="url(#skyGradient)"
          x={skyWidth / -2}
          y={100 - gameHeight}
          width={skyWidth}
          height={gameHeight}
        />
    </>
  );
};

export default Sky;