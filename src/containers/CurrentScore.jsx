import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  return (
    <g>
      <foreignObject x={-window.innerWidth / 1.42} y={'-91%'} width={'50%'} height={50}>
        <text className="score">
            {props.score}
        </text>
      </foreignObject>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;