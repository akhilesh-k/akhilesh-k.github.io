import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard";

import "./CodePage.scss";

const data = [
  {
    title: "🚀 MetaQP",
    link: "https://github.com/akhilesh-k/metaqp-test",
    content:
      "Bringing you a chrome extension to simplify searches and easily organize notes. Runner Up of Dotslash 2020.",
    tags: [
      ["Javascript", "is-warning"],
      ["AWS", "is-warning"]
    ]
  },
  {
    title: "MetaHeaven",
    link: "https://github.com/akhilesh-k/metaheaven-serve",
    content: "MetaHeaven is the hosting platform for JUIT powered by MetaJUIT",
    tags: [
      ["Sass", "is-danger"],
      ["Javascript", "is-warning"],
      ["AWS", "is-warning"]
    ]
  },
  {
    title: "PortSite 🕸️",
    link: "http://akhilesh-k.github.io/",
    content: "Built on React and Firebase!",
    tags: [
      ["React", "is-info"],
      ["Sass", "is-danger"],
      ["Redux", "is-link"],
      ["Firebase", "is-warning"]
    ]
  },
  {
    title: "🏫MetaJUITX",
    link: "#",
    content:
      "Mobile app for college freshers of JUIT Waknaghat. Developement in process, coming soon!",
    tags: [
      ["Flutter", "is-info"],
      ["Firebase", "is-warning"],
      ["UI", "is-danger"],
      ["UX", "is-link"]
    ]
  },
  {
    title: "whoisLookup",
    link: "https://github.com/akhilesh-k/python_whois_lookup",
    content:
      "💻 A python script to perform a whois lookup for a website input by user. It outputs the domain name and the expiration date.",
    tags: [
      ["Python", "is-link"],
      ["React", "is-danger"],
      ["Netlify", "is-success"]
    ]
  },
  {
    title: "ChatRT 💎",
    link: "#",
    content:
      "Real Time Messanger App. Built with Flutter and Firebase. Implemented Authentication and Image share.",
    tags: [
      ["Flutter", "is-info"],
      ["Firebase", "is-warning"],
      ["UI", "is-danger"],
      ["UX", "is-link"]
    ]
  },
  {
    title: "Express Auth",
    link: "#",
    content: "Starter template for local authentication with validation.",
    tags: [
      ["Express", "is-info"],
      ["MongoDB", "is-warning"],
      ["Passport", "is-danger"],
      ["Node", "is-link"]
    ]
  },
  {
    title: "🛫Savings101",
    link: "#",
    content: "Savings Platform using React and Firebase. Extensive visualization and plotting.",
    tags: [
      ["React", "is-info"],
      ["SaSS", "is-warning"],
      ["Redux", "is-danger"],
      ["Firebase", "is-link"]
    ]
  },
  {},
  {},
  {}
];

class CodePage extends Component {
  splitBy = (size, list) => {
    return list.reduce((acc, _, i, self) => {
      if (!(i % size)) {
        return [...acc, self.slice(i, i + size)];
      }
      return acc;
    }, []);
  };
  render() {
    return (
      <div className="CodePage">
        <h1 className="title center serif">Projects ☕</h1>
        <h4 className="subtitle serif">
          As a developer, we create things that solve problems and we should do so while focusing on
          the end goal, fulfilling human needs. Anything else is just not of the same value.{" "}
        </h4>
        {this.splitBy(4, data).map(arr => {
          return (
            <div className="columns">
              {arr.map(project => {
                return (
                  <div className="column">
                    {project.title && (
                      <ProjectCard
                        title={project.title}
                        link={project.link}
                        tags={project.tags}
                        content={project.content}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CodePage;
