import React from 'react';
import PropTypes from 'prop-types';

const Lives = (props) => {
  return (
    <g id="livesG">
      <foreignObject x={-42} y={32} width={300} height={50}>
        <text className="lives">
          &#10084; {props.lives}
        </text>
      </foreignObject>
    </g>
  );
};

Lives.propTypes = {
  position: PropTypes.shape({
    lives: PropTypes.number.isRequired
  }).isRequired,
};

export default Lives;