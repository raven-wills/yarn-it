import React, { Component } from "react";
import ScrollingNav from "../../../../ScrollingNav";
import patternData from "../patterns.json";
import Category from "./Category";

export default class Featured extends Component {
  state = {
    categories: []
  };

  async componentDidMount() {
    // const response = await fetch(
    //   "https://api.ravelry.com/pattern_categories/list.json"
    // );
    // this.setState({
    //   categories: patternData.pattern_categories.children
    // });
  }

  render() {
    return (
      <div>
        <ScrollingNav />
        <h1>Featured</h1>
        {this.state.categories.map(category => (
          <Category
            name={category.long_name}
            subcategories={category.children}
          />
        ))}
      </div>
    );
  }
}
