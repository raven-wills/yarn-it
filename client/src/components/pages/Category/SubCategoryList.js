import React, { Component } from "react";
import { Link } from "@reach/router";
import Card from "../../elements/Card";

export default class SubCategoryList extends Component {
  render() {
    const subcategories = this.props.subcategories.sort((a, b) => {
      return a.long_name > b.long_name;
    });
    return (
      <div style={{ width: "75%" }} className="container">
        {subcategories.map(subcategory => {
          return (
            <Link
              style={{
                margin: "2rem auto",
                textDecoration: "none"
              }}
              state={{ subcategory }}
              to={"/subcategory/" + subcategory.permalink}
            >
              <Card
                style={{
                  fontSize: "28px",
                  height: "3em",
                  minHeight: "100%",
                  width: "200px"
                }}
                key={subcategory.permalink}
              >
                {subcategory.long_name}
              </Card>
            </Link>
          );
        })}
      </div>
    );
  }
}
