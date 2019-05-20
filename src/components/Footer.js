import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer__copyright">Copyright &copy; Henry's Blog 2019</p>
        <p className="footer__author">
          Made with <i className="icon-008" style={{ color: "#FF8789" }} /> by
          Henry Gao
        </p>
      </div>
    );
  }
}
