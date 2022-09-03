import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  function CounterIncrease() {
    return setCount(count + 1);
  }
  function CounterDecrease() {
    return setCount(count - 1);
  }
  function CounterReset() {
    return setCount(0);
  }
  function topLimit() {
    if(count === 10){return true}
    else {return false};
  }
  function bottomLimit() {
    if(count === 0){return true}
    else {return false};
  }
  return (
    <div id="container">
      <h1 className="center-text">COUNTER</h1>
      <h2 className="center-text">{count}</h2>
      <button
        className="btn btn-inc"
        onClick={CounterIncrease}
        disabled={topLimit()}
      >
        Increase
      </button>
      <button
        className="btn btn-dec"
        onClick={CounterDecrease}
        disabled={bottomLimit()}
      >
        Decrease
      </button>
      <button className="btn btn-reset" onClick={CounterReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
