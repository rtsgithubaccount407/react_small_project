import React from "react";

const Section = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr></hr>
      <p>{description}</p>
    </div>
  );
};
export default Section;
