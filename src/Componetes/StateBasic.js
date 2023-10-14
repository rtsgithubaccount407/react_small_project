import React, { useState } from "react";

const StateBasics = () => {
  const [count, setcount] = useState(10);
  // let a = 10;

  // function increase() {
  //   a = a + 1;
  //   console.log("value of a", a);
  // }

  function increaseCount() {
    setcount(count + 2);
  }

  return (
    <div>
      {/* <h1>Value of is {a}</h1>
      <button onClick={increase}>Increase</button> */}
      <h1>Value of count is{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
};

export default StateBasics;
