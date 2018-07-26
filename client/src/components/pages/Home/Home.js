import React, { Component } from "react";
import axios from "axios";
import ScrollingNav from "../../ScrollingNav";
import "./Home.css";
import CategoryList from "./CategoryList";
import { Router } from "@reach/router";
import Category from "../Category";
import SubCategory from "../SubCategory";

// import { getUserData } from "../../../services/auth";

export default class Home extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios.get("/api/categories").then(response => {
      this.setState({
        categories: response.data
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
            path="/categories/:category"
            categories={this.state.categories}
          />
          <SubCategory
            path="/subcategory/:subcategory"
            categories={this.state.categories}
          />
        </Router>
      </div>
    );
  }
}
