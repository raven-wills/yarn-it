import React, { Component } from "react";
import "./Home.css";
import CategoryListItem from "./CategoryListItem";

export default class CategoryList extends Component {
  render() {
    return (
      <div className="container">
        {this.props.categories.map(category => (
          <CategoryListItem
            key={category.name}
            name={category.name}
            permalink={category.permalink}
            category={category}
          />
        ))}
      </div>
    );
  }
}
