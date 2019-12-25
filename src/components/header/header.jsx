import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="headerNav">
        <span className="headerSpan">
          <h2 className="headerTitle">Movie List</h2>
          <p className="headerInfo">Search for your favourite movies here.</p>
        </span>
        <span className="headerSpan">
          <Link className="headerLink" to="/">
            Home
          </Link>
          <Link className="headerLink" to="/about">
            About
          </Link>
          <Link className="headerLink" to="/contact">
            Contact
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;
