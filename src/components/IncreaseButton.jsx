import React from "react";

export const IncreaseButton = ({count, setCount, countLimit}) => {
  function counterIncrease() {
    setCount(count + 1);
  }
  return (
    <button
      value={"increaseBtn"}
      className="btn btn-inc"
      onClick={() => counterIncrease()}
      disabled={countLimit(true)}
    >
      Increase
    </button>
  );
};
