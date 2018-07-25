import React, { Component } from "react";

export default class SubCategoryList extends Component {
  render() {
    return (
      <div>
        {this.props.subcategories.map(subcategory => {
          return <h1>{subcategory.long_name}</h1>;
        })}
      </div>
    );
  }
}
