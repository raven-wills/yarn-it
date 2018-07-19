import React, { Component } from "react";
// import { Link } from "@reach/router";
import axios from "axios";
import ScrollingNav from "../../ScrollingNav";
import "./Home.css";
import CategoryListItem from "./CategoryListItem";

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
      <div>
        <ScrollingNav />
        <div className="container">
          {/* <CategoryListItem
            name="Featured"
            permalink="featured"
            className="item featured"
          /> */}
          {this.state.categories.map(category => (
            <CategoryListItem
              name={category.name}
              permalink={category.permalink}
              category={category}
            />
          ))}
        </div>
      </div>
    );
  }
}
