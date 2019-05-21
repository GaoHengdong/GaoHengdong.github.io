import React, { Component } from "react";
import "gitment/style/default.css";
import Gitment from "gitment";

export class Comment extends Component {
  componentDidMount() {
    const gitment = new Gitment({
      id: this.props.id,
      owner: "GaoHengdong",
      repo: "blogcomment",
      oauth: {
        client_id: "60066d5f4913bac31544",
        client_secret: "5e7300cfda23d63cc5d04a3a70cc557ef419e0a9"
      }
    });
    gitment.render("comments");
  }
  render() {
    return <div id="comments" />;
  }
}

export default Comment;
