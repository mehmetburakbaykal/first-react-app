import React from "react";

export const ResetButton = ({setCount}) => {
  function counterReset() {
    setCount(0);
  }
  return (
    <button className="btn btn-reset" onClick={counterReset}>
      Reset
    </button>
  );
};
