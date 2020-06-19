import React from "react";
import { HashRouter } from "react-router-dom";

import NavBar from "../ChildLayouts/NavBar";
import Footer from "../ChildLayouts/Home/Footer";

import Routes from "../../../components/Routes/Routes";
import "../../../css/common.css";
//import Footer from "./ChildLayouts/Footer";

function ParentLayout() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={"background"}>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default ParentLayout;
