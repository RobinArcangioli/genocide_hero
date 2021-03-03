import React from 'react';

function timeToString(n) {
  if (n < 60)
    return n;
  if (n < 3600)
    return Math.floor(n / 60) + " : " + n % 60;
  return Math.floor(n / 3600) + " : " + Math.floor(n % 3600 / 60) + " : " + n % 60;
}

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingTime: props.time,
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const time = Math.round((this.state.date - this.state.startingTime) / 1000);

    return (
      <g>
        <foreignObject x={0} y={'-91%'} width={window.innerWidth / 1.42} height={50}>
          <div className="clock">
            {timeToString(time)}
          </div>
        </foreignObject>
      </g>
    );
  }
}

export default Clock;