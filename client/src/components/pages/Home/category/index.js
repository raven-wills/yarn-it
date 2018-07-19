import React, { Component } from "react";
import ScrollingNav from "../../../ScrollingNav";

export default class Category extends Component {
  render() {
    const { name, children } = this.props.location.state;
    return (
      <div>
        <ScrollingNav />
        <h1>{name}</h1>
        <ul>{children.map(subcategory => <li>{subcategory.name}</li>)}</ul>
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
