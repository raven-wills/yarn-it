import React, { Component } from "react";
import axios from "axios";
import ScrollingNav from "../../ScrollingNav";
import "./Home.css";
import CategoryList from "./CategoryList";
import { Router } from "@reach/router";
import Category from "../Category";

export default class Home extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios.get("/api/categories").then(response => {
      // console.log(response.data.pattern_categories.children);
      this.setState({
        categories: response.data.pattern_categories.children
      });
    });
  }

  render() {
    return (
      <div>
        <ScrollingNav />
        <Router>
          <CategoryList path="/" categories={this.state.categories} />
          <Category
            path="/category/:permalink"
            categories={this.state.categories}
          />
        </Router>
      </div>
    );
  }
}
