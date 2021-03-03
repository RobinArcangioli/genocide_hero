import React from "react";

class ScoreBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayedScore: 0,
      score: props.score,
      startingTime: props.time,
      finished: false
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const now = new Date();

    const duration = now - this.state.startingTime;
    const endDuration = Math.min((this.state.score * 10), 4500);

    let newScore = this.state.score;
    let isFinished = false;
    if(duration > endDuration + 500){
        isFinished = true;
        clearInterval(this.timerID);
    }
    else if(duration > endDuration) newScore = this.state.score - 1;
    // else if(duration > 5000) newScore = this.state.score - 1;
    // else if(duration > 4000) newScore = this.state.score - 2;
    // else if(duration > 2000) newScore = Math.round(duration / 4000 * this.state.score / 10 + (this.state.score * 9 / 10) - 2);
    // else newScore = Math.round(duration / 2000 * (this.state.score * 9 / 10));
    else newScore = Math.round(Math.log(duration) / Math.log(endDuration) * (this.state.score - 1));

    this.setState({
      displayedScore: Math.min(newScore, this.state.score),
      finished: isFinished
    });
  }

  render() {
    return (
        <div class="scoreBoard">
            <div class="gameOver">
                Game Over
            </div>
            <div class={this.state.finished? "finishedScore" : "scoreBoardScore"}>
                Score: {this.state.displayedScore}
            </div>
            <button
                className="gameBtn initGameBtn"
                onClick={() => this.props.startGame()}
            >
                New genocide
            </button>
        </div>
    );
  }
}

export default ScoreBoard;