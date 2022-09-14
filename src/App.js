import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  function counterIncrease() {
    setCount(count + 1);
  }
  function counterDecrease() {
    setCount(count - 1);
  }
  function counterReset() {
    setCount(0);
  }
  function countLimit(isIncrease) {
    if (isIncrease && count === 10) {
      return true;
    } else if (!isIncrease && count === 0) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div id="container">
      <h1 className="center-text">COUNTER</h1>
      <h2 className="center-text">{count}</h2>
      <button
        className="btn btn-inc"
        onClick={() => counterIncrease()}
        disabled={countLimit(true)}
      >
        Increase
      </button>
      <button
        className="btn btn-dec"
        onClick={counterDecrease}
        disabled={countLimit(false)}
      >
        Decrease
      </button>
      <button className="btn btn-reset" onClick={counterReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
