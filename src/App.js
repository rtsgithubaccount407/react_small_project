import React from "react";
import Navbar from "./componets/navbar.js";
// import "./style.css";
import AboutMe from "./componets/AboutMe.js";
import Section from "./componets/Section.js";
import sectiondata from "./sectionData.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      {sectiondata.map((data) => (
        <Section title={data.title} description={data.description} />
      ))}
    </div>
  );
};
export default App;
