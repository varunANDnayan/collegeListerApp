import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </>
  );
}

export default Routes;
