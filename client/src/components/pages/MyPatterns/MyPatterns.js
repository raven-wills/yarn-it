import React, { Component } from "react";
import ScrollingNav from "../../ScrollingNav";
import axios from "axios";
import { login, logout, getUserData } from "../../../services/auth";
import Pattern from "../SubCategory/Pattern";

export default class MyPatterns extends Component {
  state = {
    patterns: [],
    user: {},
    loggedIn: getUserData() ? true : false
  };

  componentDidMount = () => {
    const user = getUserData();
    if (user) {
      axios.get(`/api/getuser/${user.sub}`).then(response => {
        const patterns = Object.values(response.data.savedPatterns);
        const user = response.data.user;
        this.setState({
          patterns,
          user,
          loggedIn: true
        });
      });
    }
  };

  render() {
    const title = this.state.user.name
      ? `${this.state.user.name.split(" ")[0]}'s Patterns`
      : "Loading...";
    return (
      <div>
        <ScrollingNav />
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          {this.state.loggedIn ? (
            <button className="btn btn-primary" onClick={() => logout()}>
              Log out
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => login()}>
              Log in to see saved patterns
            </button>
          )}
        </div>
        <div className="container">
          {this.state.patterns.map(patternData => (
            <Pattern
              saved={true}
              key={patternData.id}
              img={patternData.photos[0]}
              patternData={patternData}
            />
          ))}
        </div>
      </div>
    );
  }
}
