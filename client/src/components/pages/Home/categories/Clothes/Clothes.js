import React, { Component } from "react";
import axios from "axios";
import ScrollingNav from "../../../../ScrollingNav";

export default class Clothes extends Component {
  componentDidMount() {
    // fetch("/api/category/clothing").then(response => {
    //   console.log(
    //     response.json().then(responseToJson => console.log(responseToJson))
    //   );
    // });
    axios
      .get("/api/category/clothing")
      .then(response => console.log(response.data));
  }

  render() {
    return (
      <div>
        <ScrollingNav />
        <h1>Clothes</h1>
      </div>
    );
  }
}
