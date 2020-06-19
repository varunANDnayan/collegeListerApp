import React from "react";
import { Link } from "react-router-dom";

import "../../../css/common.css";

function NavBar() {
  return (
    <div>
      <nav className="nav-wrapper #FFA8B6">
        <div className="nav-container">
          <Link to="/" className="nav-name">
            College Spree
          </Link>
          <ul className="nav-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
