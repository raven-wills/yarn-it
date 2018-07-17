import React, { Component } from "react";
import axios from "axios";
import ScrollingNav from "./components/ScrollingNav";
import "./App.css";

class App extends Component {
  getGetRequest() {
    axios.get("/api/test").then(res => {
      console.log("get test");
    });
  }
  getPostRequest() {
    axios.post("/api/test", { test: true }).then(res => {
      console.log("post test");
    });
  }
  render() {
    return <ScrollingNav />;
  }
}

export default App;
