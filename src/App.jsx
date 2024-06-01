import React from "react";

import About from "./Components/About";
import Education from "./Components/Education"; // Import the Education component
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Alok",
  title: "Frontend Developer and UI/UX designer",
  email: "aloktiwari7880@gmail.com",
  gitHub: "AlokTiwari5",
  linkedIn: "alok-kumar-tiwari-14675b195/",
  medium: "",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education /> {/* Include the Education component */}
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
