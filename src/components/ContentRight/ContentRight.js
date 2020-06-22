import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Blog from "./Blog";
import Project from "./Project";
const ContentRight = () => {
  return (
    <div className="contentRight">
      ContentRight
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  );
};

export default ContentRight;
