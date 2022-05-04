import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "WeatherDashboard",
    languages: "List languages",
    packages: "List packages",
    image: "/img/WeatherDashboard.png",
    description: "description",
    repo: "",
    live: ""
  },
  {
    id: 1,
    title: "TechBlog",
    languages: "List languages",
    packages: "List packages",
    image: "/img/techBlog.gif",
    description: "description",
    repo: "",
    live: "",
  },
  {
    id: 2,
    title: "BudgetTracker",
    languages: "List languages",
    packages: "List packages",
    image: "/img/BudgetTracker.png",
    description: "description",
    live: "",
    repo: "",
  },
  {
    id: 3,
    title: "BudgetTracker",
    languages: "List languages",
    packages: "List packages",
    image: "/img/BudgetTracker.png",
    description: "description",
    live: "",
    repo: "",
  },
  {
    id: 4,
    title: "BudgetTracker",
    languages: "List languages",
    packages: "List packages",
    image: "/img/BudgetTracker.png",
    description: "description",
    live: "",
    repo: "",
  },
  {
    id: 5,
    title: "BudgetTracker",
    languages: "list languages",
    packages: "list packages",
    image: "/img/BudgetTracker.png",
    description: "description",
    live: "",
    repo: "",
  },
  {
    id: 6,
    title: "BudgetTracker",
    languages: "list languages",
    packages: "list packages",
    image: "/img/BudgetTracker.png",
    description: "description",
    live: "",
    repo: "",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;