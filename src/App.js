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
  return (
    <div id="container">
      <h1 className="center-text">COUNTER</h1>
      <h2 className="center-text">{count}</h2>
      <button
        className="btn btn-inc"
        onClick={CounterIncrease}
        disabled={count === 10}
      >
        Increase
      </button>
      <button
        className="btn btn-dec"
        onClick={CounterDecrease}
        disabled={count === 0}
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
