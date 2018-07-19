import React from "react";
import { Router } from "@reach/router";
import App from "../../App";
import MyPatterns from "../pages/MyPatterns/MyPatterns";
import Dictionary from "../pages/Dictionary/Dictionary";
import About from "../pages/About/About";
import Category from "../pages/Home/category/index";

export default () => {
  return (
    <Router style={{ height: "100%" }}>
      <App path="/" />
      <MyPatterns path="/mypatterns" />
      <Dictionary path="/dictionary" />
      <About path="/about" />
      <Category path="/category/:categoryName" />
    </Router>
  );
};
