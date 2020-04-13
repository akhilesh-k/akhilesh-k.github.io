import React, { Component } from "react";
import ReactGA from "react-ga";

import "./Footer.scss";

import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";
import dev from "../../assets/icons/dev-dot-to.svg";
import gmail from "../../assets/icons/gmail.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import medium from "../../assets/icons/medium.svg";

class Footer extends Component {
  render() {
    return (
      <footer className=" footer Footer">
        <a href="https://twitter.com/akhileshk_">
          <img alt="icon" src={twitter}></img>
        </a>
        <a href="https://github.com/akhilesh-k">
          <img alt="icon" src={github}></img>
        </a>
        <a href="https://dev.to/akhileshk">
          <img alt="icon" src={dev}></img>
        </a>
        <a href="https://instagram.com/akhilesh.kumarr">
          <img alt="icon" src={instagram}></img>
        </a>
        <a href="mailto:akhilesh_k@outlook.com">
          <img alt="icon" src={gmail}></img>
        </a>
        <a href="https://www.linkedin.com/in/akhilesh-k/">
          <img alt="icon" src={linkedin}></img>
        </a>
        <a href="https://medium.com/@akhileshk">
          <img alt="icon" src={medium}></img>
        </a>
        <br />

        <p>
          This website is built with React and Firebase and is{" "}
          <a
            onClick={() => {
              ReactGA.event({
                category: "Outgoing",
                action: "Clicked on github repo link"
              });
            }}
            href="https://github.com/akhilesh-k/akhilesh-k.github.io"
          >
            open sourced{" "}
            <span role="img" aria-label="heart">
              💖 🎉
            </span>
            .
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
