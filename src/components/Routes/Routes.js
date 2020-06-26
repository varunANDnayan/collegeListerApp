import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Colleges from "./Colleges";

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/colleges" component={Colleges} />
    </>
  );
}

export default Routes;
