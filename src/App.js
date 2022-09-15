import React, { useState } from "react";
import { DecreaseButton } from "./components/DecreaseButton";
import { Header } from "./components/Header";
import { IncreaseButton } from "./components/IncreaseButton";
import { ResetButton } from "./components/ResetButton";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
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
      <Header count={count} />
      <IncreaseButton
        count={count}
        setCount={setCount}
        countLimit={countLimit}
      />
      <DecreaseButton
        count={count}
        setCount={setCount}
        countLimit={countLimit}
      />
      <ResetButton count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
