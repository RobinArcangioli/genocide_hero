const InitBody = props => {
  return (
    <div className="initBody">
      <div className="initMsg">
        Genocide Hero
      </div>
      <div className="initMsg2">
        Ready for mass killing ?
      </div>
      <button
        className="gameBtn initGameBtn"
        onClick={() => props.startGame()}
      >
        New genocide
      </button>
    </div>
  );
}

export default InitBody;