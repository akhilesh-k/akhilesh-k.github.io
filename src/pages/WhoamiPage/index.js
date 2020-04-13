import React, { Component } from "react";
import ReactGA from "react-ga";

import "./WhoamiPage.scss";
import profile from "../../assets/icons/profile.png";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";

class WhoamiPage extends Component {
  getDay = () => {
    switch (new Date().getDay()) {
      case 1:
        return "Marvelous Monday";
      case 2:
        return "Terrific Tuesday";
      case 3:
        return "Wonderful Wednesday";
      case 4:
        return "Thoughtful Thursday";
      case 5:
        return "Fun Friday";
      case 6:
        return "Spectacular Saturday";
      default:
        return "Satisfying Sunday";
    }
  };
  render() {
    return (
      <div className="WhoamiPage">
        <h1 className="title center serif">Who am I?</h1>
        <div className="columns">
          <div className="column is-one-quarter">
            <figure className="image is-128x128">
              <img className="is-rounded" src={profile} alt="profile" />
            </figure>
            <h1 className="title serif">Akhilesh Kumar</h1>
            <h1 className="subtitle">Get in touch with me!</h1>

            <p className="subtitle margin-cut"></p>
            <a href="https://twitter.com/akhileshk_">
              <img class="img-social" alt="icon" src={twitter}></img>
            </a>
            <a href="https://github.com/akhilesh-k">
              <img class="img-social" alt="icon" src={github}></img>
            </a>
            <a href="https://www.linkedin.com/in/akhilesh-k/">
              <img class="img-social" alt="icon" src={linkedin}></img>
            </a>
            {/* <a href="mailto:akhilesh_k@outlook.com">Email</a>
            <a href="https://www.linkedin.com/in/akhilesh-k/">Linkedin</a>
            <a href="https://github.com/akhilesh-k">Github</a> */}
          </div>
          <div className="column">
            <p className="enlarge">
              I am a Software Developement Engineer skilled in Complete Software Developement
              Lifecycle. Well versed with Full Stack developement with the MERN Stack, Devops and
              Microservices Architectures.{" "}
              <p>
                I am passionate about writing clean, efficient and professional code and have a good
                understanding of Data Structures, Algorithms and System Design. Currently working as
                Data Science Intern at Ericsson.
              </p>
            </p>
            <div className="columns">
              <div className="column content">
                <h2 className="subtitle">Work Experience</h2>
                <ul>
                  <li>
                    <h6>Data Scinece Intern @ Ericsson</h6>
                    <p>Feb 2020 - Present</p>
                  </li>
                  <li>
                    <h6>Teaching Assistant</h6>
                    <p>
                      July 2019 - December 2019
                      <p>Teaching Assistant for the Artificial Intelligence course at JUIT</p>
                    </p>
                  </li>
                  <li>
                    <h6>Automation Intern @ Akvo</h6>
                    <p>May 2019 - July 2019</p>
                  </li>
                </ul>
              </div>
              <div className="column content">
                <h3 className="subtitle">Things I'm proud of</h3>
                <ul>
                  <li>
                    <h6>World Rank 27, Brainwaves 2019</h6>
                    <p>Got 27/8134 rank in the ML contest on Hackerearth Website</p>
                  </li>
                  <li>
                    <h6>
                      Founded <a href="https://github.com/metajuit/">MetaJUIT</a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      Chaired the <a href="https://juit.acm.org">ACM Chapter</a>
                    </h6>
                  </li>
                  <li>
                    <h6>
                      Founded the <a href="https://juit.acm.org">E-Cell, JUIT</a>
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <button
              align="center"
              className="button is-black is-rounded"
              onClick={() => {
                ReactGA.event({
                  category: "Outgoing",
                  action: "Download Resume"
                });
                window.location.href =
                  "https://github.com/akhilesh-k/akhilesh-k.github.io/raw/master/resume.pdf";
              }}
            >
              Download My Resume
            </button>
            <p>Have a {this.getDay()}!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhoamiPage;
