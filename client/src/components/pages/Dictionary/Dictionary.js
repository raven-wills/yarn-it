import React, { Component } from "react";
import ScrollingNav from "../../ScrollingNav";
import Card from "../../elements/Card";

export default class Dictionary extends Component {
  render() {
    return (
      <div>
        <ScrollingNav />
        <h1 style={{ textAlign: "center" }}>Dictionary</h1>
        <Card style={{ margin: "auto", width: "50%" }}>Testing</Card>
      </div>
    );
  }
}
