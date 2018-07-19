import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import ScrollingNav from "../../ScrollingNav";
import "./Home.css";

export default class Home extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios.get("/api/categories").then(response => {
      console.log(response.data.pattern_categories.children);
      this.setState({
        categories: response.data.pattern_categories.children
      });
    });
  }

  render() {
    return (
      <div className="home">
        <ScrollingNav />
        <div className="container">
          <Link to="/featured" className="item item1" />
          <Link to="/clothes" className="item item2" />
          <Link to="/toys" className="item item3" />
          <Link to="/accessories" className="item item4" />
        </div>
      </div>
    );
  }
}
