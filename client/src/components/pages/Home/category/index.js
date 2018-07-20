import React, { Component } from "react";
import ScrollingNav from "../../../ScrollingNav";
import "../Home.css";

export default class Category extends Component {
  // componentDidMount() {}

  render() {
    const { name, children } = this.props.location.state;
    return (
      <div>
        <ScrollingNav />
        <h1>{name}</h1>
        <div className="container">
          {children.map(subcategory => (
            <div className="item">{subcategory.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

// const CategoryArrow = props => {
//   return (
//     <div>
//       <ScrollingNav />
//       <h1>{props.categoryName}</h1>
//     </div>
//   );
// };
