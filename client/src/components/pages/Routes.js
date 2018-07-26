import React from "react";
import { Router } from "@reach/router";
import MyPatterns from "../pages/MyPatterns/MyPatterns";
import Dictionary from "../pages/Dictionary/Dictionary";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Callback from "../Callback";

export default () => {
  return (
    <Router style={{ height: "100%" }}>
      <Home path="/*" />
      <MyPatterns path="/mypatterns" />
      <Dictionary path="/dictionary" />
      <About path="/about" />
      <Callback path="/callback" />
    </Router>
  );
};
