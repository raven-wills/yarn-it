import React, { Component } from "react";
import SubCategory from "../SubCategory";
// import styled from "styled-components";
// import { Link } from "@reach/router";
// import Card from "../../elements/Card";

export default class SubCategoryList extends Component {
  state = {
    activeSubCategory: ""
  };

  handleChange = e => {
    this.setState({ activeSubCategory: e.target.value });
  };

  render() {
    const subcategories = this.props.subcategories.sort((a, b) => {
      return a.long_name > b.long_name;
    });
    return (
      <div className="container">
        <div>
          <select
            className="form-control form-control-lg"
            name="subcategory-dropdown"
            onChange={this.handleChange}
          >
            <option value={this.props.parentcategory}>Select</option>
            {subcategories.map(subcategory => (
              <option key={subcategory.id} value={subcategory.permalink}>
                {subcategory.long_name}
              </option>
            ))}
          </select>
        </div>
        {this.state.activeSubCategory ? (
          <SubCategory subcategory={this.state.activeSubCategory} />
        ) : (
          <SubCategory subcategory={this.props.parentcategory} />
        )}
      </div>
    );
  }
}
