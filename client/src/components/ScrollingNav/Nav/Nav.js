import React from "react";
import "./Nav.css";
import { Link } from "@reach/router";

const Nav = props => {
  const opacity = props.opacity ? Math.max(props.opacity, 0.2) : 0;
  const borderBottomWidth = props.opacity === 1 ? props.borderBottomWidth : 0;

  return (
    <div
      className="navbar navbar-default navbar-static-top"
      role="navigation"
      style={{ opacity, borderBottomWidth }}
    >
      <div className="navContainer">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#nav-id"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="#" className="navbar-brand">
            Yarn it!
          </a>
        </div>
        <div className="collapse navbar-collapse" id="nav-id">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mypatterns">My Patterns</Link>
            </li>
            <li>
              <Link to="/dictionary">Dictionary</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
