/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a computer science student studying at Chandigarh University. I enjoy creating unique frontend Web Application and user interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design(UI/UX)",
  "ReactJS",
  "Tailwind",
  "JavaScript",
  "Git, GitHub",
  "MongoDB, MySQL",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in creative ways to drive innovation. Passionate UI/UX designer and front-end web developer, building and maintaining responsive websites for the technology and service industry. With expertise in HTML, CSS, and JavaScript alongside modern frameworks and libraries such as ReactJS and NodeJS.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "15px",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
