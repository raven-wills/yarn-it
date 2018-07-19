import React, { Component } from "react";
import ScrollingNav from "../../../../ScrollingNav";

export default class Toys extends Component {
  render() {
    return (
      <div>
        <ScrollingNav />
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
