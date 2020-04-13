import React, { Component } from "react";

import "./BlogPage.scss";
import BlogCard from "../../components/BlogCard";

const data = [
  {
    title: "React and Cloud Firestore",
    link: "#",
    content: "",
    tags: [
      ["React.js", "is-warning"],
      ["Firebase", "is-warning"]
    ]
  },
  {
    title: "Deploying React App to gh-pages",
    link: "https://dev.to/akhileshk/deploying-react-app-to-github-pages-2jg5",
    content: "",
    tags: [
      ["React.js", "is-warning"],
      ["Firebase", "is-warning"]
    ]
  },
  {
    title: "Effort to OpenSource Community!",
    link:
      "https://medium.com/@akhilesh_k/an-effort-to-establish-an-open-source-society-in-the-university-ff47e17272a?source=---------2------------------",
    content: "",
    tags: [
      ["Open Source", "is-info"],
      ["Github", "is-danger"]
    ]
  },
  {},
  {},
  {},
  {},
  {},
  {}
];

class BlogPage extends Component {
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
      <div className="BlogPage">
        <h1 className="title center serif">Dev Letters</h1>
        <h3 className="center subtitle serif">
          I write about about Programming, Software Engineering, MERN Stack and DevOps.
        </h3>
        {this.splitBy(4, data).map(arr => {
          return (
            <div className="columns">
              {arr.map(blog => {
                return (
                  <div className="column">
                    {blog.title && (
                      <BlogCard title={blog.title} link={blog.link} tags={blog.tags} />
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

export default BlogPage;
