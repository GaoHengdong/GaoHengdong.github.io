import React, { Component } from "react";
import "./BlogItemContainer.scss";

export default class BlogItemContainer extends Component {
  render() {
    return <div className="blogitemcontainer">{this.props.children}</div>;
  }
}
