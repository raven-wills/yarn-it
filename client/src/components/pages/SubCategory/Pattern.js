import React, { Component } from "react";
import axios from "axios";
import { getUserData } from "../../../services/auth.js";
import Card from "../../elements/Card";

export default class Pattern extends Component {
  state = {
    updated: false
  };
  savePattern = id => {
    if (this.props.canSave) {
      this.setState({ updated: true });
      const { sub } = getUserData();
      axios.post(`/api/savepattern/${sub}/${id}`).then(response => {});
    }
  };

  render() {
    const { name, id, permalink, first_photo } = this.props.patternData;
    let img = first_photo;
    if (!first_photo) {
      img = this.props.img;
    }
    return (
      <Card key={id}>
        <h3>{name.slice(0, 29)}</h3>
        <a href={"https://www.ravelry.com/patterns/library/" + permalink}>
          {img ? (
            <img src={img.small_url} alt="pattern" />
          ) : (
            <img
              style={{ objectFit: "contain" }}
              src={"https://style-cdn.ravelrycache.com/images/no-photo.png"}
              alt="not found "
            />
          )}
        </a>
        {this.props.saved || this.state.updated ? (
          <button
            style={{ backgroundColor: "var(--blue)" }}
            disabled={true}
            onClick={() => this.savePattern(id)}
            type="button"
            className="btn btn-lg"
          >
            Saved
          </button>
        ) : (
          <button
            disabled={!this.props.canSave}
            style={{ cursor: "pointer" }}
            onClick={() => this.savePattern(id)}
            type="button"
            className="btn btn-lg"
          >
            Save
          </button>
        )}
      </Card>
    );
  }
}
