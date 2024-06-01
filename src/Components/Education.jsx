import React from "react";
import image from "../images/design.jpg";

const imageAltText = "purple and blue abstract background";

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "15px",
          fontFamily: "sans-serif",
        }}
      >
        <h2>Education</h2>
        <p style={{ fontSize: "1.25rem" }}>
          Chandigarh University, Bachelor of Engineering (Computer Science)
          <br />
          <span style={{ fontSize: "1rem" }}>2021 - 2025</span>
        </p>
      </div>
    </section>
  );
};

export default Education;
