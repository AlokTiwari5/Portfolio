import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "Desktop with books and laptop";

const projectList = [
  {
    title: "Ask Overflow 🎉",
    description:
      "Built a Q&A platform for professional and tech-savvy programmers. Built using the MERN stack, featuring real-time comments and dynamic answer retrieval. Implemented an embedded rating system to promote accurate answers.",
    url: "https://github.com/AlokTiwari5/StackOverflow-Clone",
  },
  {
    title: "Quick Food (Cafeteria Management Solution)",
    description:
      "Developed a user-friendly frontend for a cafeteria management system, enabling easy and intuitive interaction for customers and staff.",
    url: "https://github.com/AlokTiwari5",
  },
  {
    title: "Smart Watch Portal",
    description:
      "Built a smart watch portal using GSAP Animation. A front-end project built using proper indentation and high-quality code.",
    url: "https://github.com/AlokTiwari5/Watch-webpage",
  },
  {
    title: "Online Text Editor",
    description:
      "Developed an online text editor using ReactJS. Implemented a user-friendly interface with a focus on simplicity and ease of use.",
    url: "https://github.com/AlokTiwari5/online_text_editor",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
