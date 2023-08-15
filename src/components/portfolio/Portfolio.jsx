import React from "react";
import IMG1 from "../../assets/extract1.jpg";
import IMG2 from "../../assets/realestate.png";
import IMG3 from "../../assets/fitness.png";
import IMG4 from "../../assets/Travel UI.jpg";
import IMG5 from "../../assets/richest.png";
import IMG6 from "../../assets/books.jpg";
import IMG7 from "../../assets/ai.png";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Extract Craft Shop via Figma - React App",
    github: "https://github.com/GavriloStankovic/Extract-Craft",
    demo: "https://intership-extract-craft-project.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Buy Real Estate - Responsive React App",
    github:
      "https://github.com/GavriloStankovic/Real-Estate-Responsive-Web-App",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Fitness Shop - Responsive React App",
    github:
      "https://github.com/GavriloStankovic/Fitness-App-Responsive-React-App",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: IMG4,
    title: "Travel and Tour Webiste - Responsive React App",
    github:
      "https://github.com/GavriloStankovic/Tour-and-Travel-Website-Responsive-React-App",
    demo: "https://travel-and-tour-responsive-webiste.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Top 10 Richest People in the world - Drag and Drop",
    github: "https://github.com/GavriloStankovic/Top-10-Richest-People",
    demo: "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Books List - JavaScript App",
    github: "https://github.com/GavriloStankovic/Books-List-App",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 7,
    image: IMG7,
    title: "ChatGPT3 Website - React Responsive App",
    github:
      "https://github.com/GavriloStankovic/ChatGPT3-Website-React-Resposnive-App",
    demo: "https://chatgpt-webiste.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="section">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
