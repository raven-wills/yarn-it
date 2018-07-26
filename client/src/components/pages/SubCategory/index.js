import React, { Component } from "react";
import axios from "axios";
import Pattern from "./Pattern";
import { getUserData, login, logout } from "../../../services/auth.js";

export default class SubCategory extends Component {
  state = {
    patterns: [],
    user: {},
    loggedIn: getUserData() ? true : false,
    savedPatternIds: []
  };

  componentDidMount() {
    axios.get("/api/subcategory/" + this.props.subcategory).then(response => {
      this.setState({
        patterns: response.data.patterns
      });
    });
    const user = getUserData();
    if (user) {
      axios.get(`/api/getuser/${user.sub}`).then(response => {
        const user = response.data.user;
        const savedPatternIds = Object.values(response.data.savedPatterns).map(
          pattern => pattern.id
        );
        this.setState({
          user,
          loggedIn: true,
          savedPatternIds
        });
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.subcategory !== prevProps.subcategory) {
      axios.get("/api/subcategory/" + this.props.subcategory).then(response => {
        this.setState({
          patterns: response.data.patterns
        });
      });
    }
  }

  render() {
    return (
      <div style={{ width: "100%" }} className="container">
        {this.state.loggedIn ? (
          <button className="btn btn-primary" onClick={() => logout()}>
            Log out
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => login()}>
            Log in to save patterns
          </button>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {this.state.patterns.map(patternData => {
            return (
              <Pattern
                saved={this.state.savedPatternIds.includes(patternData.id)}
                canSave={this.state.loggedIn}
                key={patternData.id}
                patternData={patternData}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
