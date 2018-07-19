import React from "react";
import { Router } from "@reach/router";
import App from "../../App";
import MyPatterns from "../pages/MyPatterns/MyPatterns";
import Dictionary from "../pages/Dictionary/Dictionary";
import About from "../pages/About/About";
import Featured from "../pages/Home/categories/Featured/Featured";
import Clothes from "../pages/Home/categories/Clothes/Clothes";
import Toys from "../pages/Home/categories/Toys/Toys";
import Accessories from "../pages/Home/categories/Accessories/Accessories";

export default () => {
  return (
    <Router style={{ height: "100%" }}>
      <App path="/" />
      <MyPatterns path="/mypatterns" />
      <Dictionary path="/dictionary" />
      <About path="/about" />
      <Featured path="/featured" />
      <Clothes path="/clothes" />
      <Toys path="/toys" />
      <Accessories path="/accessories" />
    </Router>
  );
};
