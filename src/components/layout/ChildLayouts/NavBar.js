import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider.js";
import "../../../css/common.css";

const NavBar = () => {
  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  let isMobileAgent = isMobile.any();
  return (
    <div>
      <nav className="nav-wrapper #FFA8B6">
        {isMobileAgent && (
          <>
            <Slider />
            <Link to="/" className="nav-name-mobile">
              College Spree
            </Link>
          </>
        )}
        {!isMobileAgent && (
          <div className="nav-container">
            <Link to="/" className="nav-name">
              College Spree
            </Link>
            <ul className="nav-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/colleges">Colleges</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
