import React, { Component } from "react";
import Nav from "./Nav";
import Header from "./Header";
// import Content from "./components/Content";
import "./ScrollingNav.css";

class ScrollingNav extends React.Component {
  static defaultProps = {
    bottomBorderWidth: 2,
    headerHeight: 200,
    fadeInDistance: 100
  };

  constructor(props) {
    super(props);
    this.state = { navOpacity: 0 };
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateNavOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateNavOpacity);
  }

  updateNavOpacity() {
    const navbarHeight = 50; // Bootstrap default
    const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props;
    const endFade = headerHeight - navbarHeight - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrolly = window.scrollY;

    if (scrolly < startFade) {
      if (this.state.opacity === 0) return;
      this.setState({ navOpacity: 0 });
      return;
    }

    if (scrolly > endFade) {
      if (this.state.opacity === 1) return;
      this.setState({ navOpacity: 1 });
      return;
    }

    const pxPastStartFade = scrolly - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
  }

  render() {
    return (
      <div>
        <Nav
          opacity={this.state.navOpacity}
          borderBottomWidth={this.props.bottomBorderWidth}
        />
        <Header
          height={this.props.headerHeight}
          borderBottomWidth={this.props.bottomBorderWidth}
        />
        {/* <Content /> */}
      </div>
    );
  }
}

export default ScrollingNav;
