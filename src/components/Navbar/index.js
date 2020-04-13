import React, { Component } from "react";

import "./Navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { isActive: false };
  toggleActive = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log(this.state);
  };
  render() {
    return (
      <nav className="Navbar">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1 className="title serif" id="brand">
                Akhilesh Kumar
              </h1>
            </Link>

            <div
              role="button"
              className={`navbar-burger ${this.state.isActive ? "is-active" : ""}`}
              onClick={this.toggleActive}
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div className={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link to="/code" className="navbar-item">
                Projects
              </Link>
              <Link to="/blog" className="navbar-item">
                Dev Letters
              </Link>
              <Link to="/time" className="navbar-item">
                Timeline
              </Link>
              <Link to="/whoami" className="navbar-item">
                About Me
              </Link>
            </div>
          </div>
        </nav>
      </nav>
    );
  }
}

export default Navbar;
