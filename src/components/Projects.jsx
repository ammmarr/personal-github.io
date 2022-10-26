import React from "react";
import ProjectComponent from "./ProjectComponent";
import FindMe from "./FindMe";
import markdownImg from "../assets/markdownImg.png";
import budgetCalculator from "../assets/budgetCalculator.png";
import weatherImg from "../assets/weatherSnippet.png";
import todoListImg from "../assets/todoListImg.png";

export default function Projects() {
  const projectsData = [
    {
      imageUrl: markdownImg,
      name: "Markdown previewer",
      gitHub: "",
      Live: "",
      key: Math.floor(Math.random() * 1000000),
    },
    {
      imageUrl: budgetCalculator,
      name: "Budget Calculator",
      gitHub: "",
      Live: "",
      key: Math.floor(Math.random() * 1000000),
    },
    {
      imageUrl: weatherImg,
      name: "Weather Finder",
      gitHub: "",
      Live: "",
      key: Math.floor(Math.random() * 1000000),
    },
    {
      imageUrl: todoListImg,
      name: "Todo List",
      gitHub: "",
      Live: "",
      key: Math.floor(Math.random() * 1000000),
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <h1>PROJECTS</h1>

      <span className="thin-line"></span>
      <div className="projects-component-container">
        {projectsData.map((comp) => (
          <ProjectComponent
            id={comp.key}
            imageUrl={comp.imageUrl}
            name={comp.name}
            key={comp.key}
          />
        ))}
      </div>
    </div>
  );
}
