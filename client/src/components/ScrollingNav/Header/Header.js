import React from "react";
import "./Header.css";
import { Link } from "@reach/router";

const Header = props => (
  <div
    className="header"
    style={{ height: props.height, borderBottomWidth: props.borderBottomWidth }}
  >
    <div className="name">
      Yarn It!{" "}
      <img
        src="https://res.cloudinary.com/dka27hlm7/image/upload/v1529498132/cat_yarn_orange.png"
        alt="yarn ball"
      />
    </div>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/mypatterns">My Patterns</Link>
      {/* <Link to="/dictionary">Dictionary</Link> */}
      <Link to="/about">About</Link>
    </div>
  </div>
);

export default Header;
