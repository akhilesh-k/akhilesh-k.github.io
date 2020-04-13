import React, { Component } from "react";

import "./HomePage.scss";
import Stack from "../../components/Stack";
import { Link } from "react-router-dom";

import wave from "../../assets/icons/wave.png";
import profile from "../../assets/icons/profile.png";
import MailBox from "../../components/MailBox";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div id="jumbo">
          <img src={wave} alt="wave"></img>
          <h1 className="title serif">Hi, I'm Akhilesh!</h1>
          <h2 className="subtitle">I design and build software of all kinds.</h2>
          <div className="linkbar">
            <Link to="/code">Projects</Link>
            <Link to="/blog">Dev Letters</Link>
            <Link to="/time">Timeline</Link>
            <Link to="/whoami">About Me</Link>
          </div>
          <center>
            <MailBox />
          </center>
        </div>
        <Stack />
      </div>
    );
  }
}

export default HomePage;
