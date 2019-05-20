import React from "react";
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import "./Blog.scss";

class Blog extends React.Component {
  render() {
    return (
      <div
        className="blog"
        style={{ backgroundColor: "#f5f7f9", minHeight: "70vh" }}
      >
        <BlogHeader />
        <BlogBody />
      </div>
    );
  }
}

export default Blog;
