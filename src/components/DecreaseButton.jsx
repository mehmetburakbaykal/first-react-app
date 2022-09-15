import React from "react";

export const DecreaseButton = ({ count, setCount, countLimit }) => {
  function counterDecrease() {
    setCount(count - 1);
  }
  return (
    <button
      value={"decreaseBtn"}
      className="btn btn-dec"
      onClick={counterDecrease}
      disabled={countLimit(false)}
    >
      Decrease
    </button>
  );
};
