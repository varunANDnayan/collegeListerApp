import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "../ChildLayouts/NavBar";
import Footer from "../ChildLayouts/Home/Footer";

import Routes from "../../../components/Routes/Routes";
import "../../../css/common.css";
//import Footer from "./ChildLayouts/Footer";

function ParentLayout() {
  return (
    <BrowserRouter>
      <div className={"background"}>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default ParentLayout;
