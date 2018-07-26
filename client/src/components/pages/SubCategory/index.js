import React, { Component, Fragment } from "react";
import axios from "axios";
import Card from "../../elements/Card";

export default class SubCategory extends Component {
  state = {
    patterns: []
  };

  componentDidMount() {
    axios.get("/api/subcategory/" + this.props.subcategory).then(response => {
      const patterns = response.data.patterns.filter(pattern => pattern.free);
      this.setState({
        patterns
      });
    });
  }

  render() {
    const name = this.props.location.state.subcategory.long_name;
    console.log(this.props.location.state.subcategory);

    if (this.state.patterns.length === 0) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>{name}</h1>
          <h2>Loading...</h2>
        </div>
      );
    }
    return (
      <Fragment>
        <h1 style={{ textAlign: "center" }}>{name}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "auto",
            width: "85%"
          }}
        >
          {this.state.patterns.map(pattern => {
            return (
              <Card key={pattern.id}>
                <h3>{pattern.name}</h3>
                <a
                  href={
                    "https://www.ravelry.com/patterns/library/" +
                    pattern.permalink
                  }
                >
                  <img src={pattern.first_photo.medium_url} alt="pattern" />
                </a>
                <button>Save</button>
              </Card>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
