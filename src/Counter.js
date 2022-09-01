import React, { useState } from "react";
import "./style.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div id="container">
      <h1 className="center-text">COUNTER</h1>
      <h2 className="center-text">{count}</h2>
      <button
        className="btn btn-inc"
        onClick={() => setCount(count + 1)}
        disabled={count === 10}
      >
        Increase
      </button>
      <button
        className="btn btn-dec"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        Decrease
      </button>
      <button className="btn btn-reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
