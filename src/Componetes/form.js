import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");

  function updateName(event) {
    setname(event.target.value);
  }

  return (
    <div>
      <h1>Form</h1>

      <input
        type="text"
        onChange={updateName}
        placeholder="Enter Your name"
      ></input>
      <p>Your name is :{name}</p>
    </div>
  );
};

export default Form;
