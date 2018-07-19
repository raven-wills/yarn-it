import React, { Component } from "react";
import axios from "axios";
import Home from "./components/pages/Home/Home";

class App extends Component {
  savePattern() {}

  render() {
    return <Home />;
    // <button onClick={savePattern}>Submit</button>;
  }
}

export default App;
