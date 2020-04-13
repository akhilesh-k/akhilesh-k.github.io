import React from "react";

import StackItem from "./StackItem";
import "./Stack.scss";

import jsLogo from "../../assets/icons/javascript.jpg";
import reactLogo from "../../assets/icons/react.png";
import nodeLogo from "../../assets/icons/node.png";
import reduxLogo from "../../assets/icons/redux.png";
import mongoLogo from "../../assets/icons/mongo.png";
import graphqlLogo from "../../assets/icons/graphql.png";
import firebaseLogo from "../../assets/icons/firebase.jpg";
import jupyterLogo from "../../assets/icons/jupyter.png";
import gitLogo from "../../assets/icons/git.png";
import pythonLogo from "../../assets/icons/python.png";
import htmlLogo from "../../assets/icons/html.png";
import npmLogo from "../../assets/icons/npm.png";
import sassLogo from "../../assets/icons/sass.png";
import cssLogo from "../../assets/icons/css.png";
import cppLogo from "../../assets/icons/cpp.png";
import netlifyLogo from "../../assets/icons/netlify.png";
import flutterLogo from "../../assets/icons/flutter.png";
import expressLogo from "../../assets/icons/express.png";
import dartLogo from "../../assets/icons/dart.png";

class Stack extends React.Component {
  render() {
    return (
      <div id="stack">
        <h3 align="center" className="title">
          Tech Stack
        </h3>
        <section>
          <StackItem image={jsLogo} name="Javascript" />
          <StackItem image={cppLogo} name="C++" />
          <StackItem image={pythonLogo} name="Python" />
          <StackItem image={nodeLogo} name="Node" />
          <StackItem image={reactLogo} name="React" />
          <StackItem image={reduxLogo} name="Redux" />
          <StackItem image={mongoLogo} name="MongoDB" />
          <StackItem image={graphqlLogo} name="GraphQL" />
          <StackItem image={expressLogo} name="Express" />
          <StackItem image={htmlLogo} name="HTML5" />
          <StackItem image={cssLogo} name="CSS3" />
          <StackItem image={sassLogo} name="Sass" />
          <StackItem image={jupyterLogo} name="Jupyter" />
          <StackItem image={npmLogo} name="npm" />
          <StackItem image={gitLogo} name="Git" />
          <StackItem image={dartLogo} name="Dart" />
          <StackItem image={flutterLogo} name="Flutter" />
          <StackItem image={firebaseLogo} name="Firebase" />
          <StackItem image={netlifyLogo} name="Netlify" />
        </section>
      </div>
    );
  }
}

export default Stack;
