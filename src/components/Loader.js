import React, { Component } from "react";
import "./Loader.scss";

export class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Loader;
