import React, { Component } from "react";
import SubCategoryList from "./SubCategoryList";

const titleStyle = {
  textAlign: "center"
};

export default class Category extends Component {
  getCategory() {
    return this.props.categories.find(category => {
      return category.permalink === this.props.category;
    });
  }

  render() {
    const category = this.getCategory();

    if (!category) {
      return <div />;
    }

    return (
      <div>
        <h1 style={titleStyle}>{category.long_name}</h1>
        <SubCategoryList subcategories={category.children} />
      </div>
    );
  }
}
