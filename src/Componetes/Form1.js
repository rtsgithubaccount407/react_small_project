import React, { useState } from "react";

const Form1 = () => {
  const [name, setname] = useState("");
  //   const [uppercase, setUppercase] = useState("");
  const [btnclicked, setbtnclicked] = useState(false);

  function makeItCapital() {
    // setUppercase(name.toUpperCase());
    setbtnclicked(true);
  }

  return (
    <div>
      <h1>My name is rohit</h1>
      <input
        type="text"
        placeholder="Enter Your name"
        onChange={(e) => {
          return setname(e.target.value);
        }}
      ></input>

      <button onClick={makeItCapital}>Convert to capital</button>
      <p>Your Name is:{btnclicked == true && name.toUpperCase()}</p>
    </div>
  );
};

export default Form1;
