import React, { Component } from "react";
import { Link } from "@reach/router";
import "../Home/Home.css";

export default class Category extends Component {
  render() {
    return (
      <Link
        to={"/category/" + this.props.permalink}
        className={`item ${this.props.permalink}`}
        state={this.props.category}
      />
    );
  }
}
