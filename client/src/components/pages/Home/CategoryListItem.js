import React, { Component } from "react";
import { Link } from "@reach/router";
import "../Home/Home.css";
import Card from "../../elements/Card";
import styled from "styled-components";

var images = [
  {
    name: "clothing",
    background:
      "https://res.cloudinary.com/dka27hlm7/image/upload/v1531942930/sweater.svg"
  },
  {
    name: "toysandhobbies",
    background:
      "https://res.cloudinary.com/dka27hlm7/image/upload/v1531944462/teddy-bear.svg"
  },
  {
    name: "accessories",
    background:
      "https://res.cloudinary.com/dka27hlm7/image/upload/v1531943080/scarf.svg"
  },
  {
    name: "home",
    background:
      "https://res.cloudinary.com/dka27hlm7/image/upload/v1531973649/house.svg"
  },
  {
    name: "pet",
    background:
      "https://res.cloudinary.com/dka27hlm7/image/upload/v1531973957/dog_1.svg"
  },
  {
    name: "pattern-component",
    background:
      "https://res.cloudinary.com/dka27hlm7/image/upload/v1532045314/crochet.svg"
  }
];

export default class Category extends Component {
  render() {
    const source = images.find(images => {
      return images.name === this.props.permalink;
    });

    return (
      <Link
        style={{ textDecoration: "none" }}
        to={"/categories/" + this.props.permalink}
        className={`item ${this.props.permalink}`}
        state={this.props.category}
      >
        <CategoryCard>
          <h1
            style={{
              marginTop: "10px",
              whiteSpace: "nowrap",
              fontSize: "28px"
            }}
          >
            {this.props.name}
          </h1>
          <img
            style={{ height: "150px", objectFit: "contain", marginTop: "15px" }}
            src={source.background}
            alt="main categories"
          />
        </CategoryCard>
      </Link>
    );
  }
}

const CategoryCard = styled(Card)`
  justify-content: flex-start;
  padding: 1rem;
  min-height: 250px;
  box-shadow: 0 1px 3px rgba(144, 106, 137, 0.12),
    0 1px 2px rgba(144, 106, 137, 0.24);
  &:hover {
    box-shadow: 0 10px 15px rgba(144, 106, 137, 0.18),
      0 10px 20px rgba(144, 106, 137, 0.22);
  }
  img {
    border: none;
  }
`;
