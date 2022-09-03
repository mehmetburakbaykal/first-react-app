import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  function counterIncrease() {
    return setCount(count + 1);
  }
  function counterDecrease() {
    return setCount(count - 1);
  }
  function counterReset() {
    return setCount(0);
  }
  function countLimit() {
    if (count === 10 && EventTarget.className.require("btn btn-inc")) {
      return true;
    }
    if (count === 0) {
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
        onClick={() => counterIncrease}
        disabled={countLimit()}
      >
        Increase
      </button>
      <button
        className="btn btn-dec"
        onClick={counterDecrease}
        disabled={countLimit()}
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
