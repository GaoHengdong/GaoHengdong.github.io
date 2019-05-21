import React from "react";
import ReactMarkdown from "react-markdown";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { fetchBlogList } from "../actions";
import { tagColors, defaultColors } from "../datas/config";
import Loader from "./Loader";
import Comment from "./Comment";

import "github-markdown-css";
import "./BlogContent.scss";

class BlogContent extends React.Component {
  state = {
    content: "",
    inProp: true
  };

  async fetchContent(path) {
    const response = await fetch(path);

    //使loader最少加载1s
    const responseText = await Promise.all([
      new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, 300)
      ),
      response.text()
    ]);

    this.setState({
      content: responseText[1],
      inProp: false
    });
  }

  renderTags(tags) {
    return tags.map(item => (
      <li
        key={item}
        style={{ backgroundColor: `${defaultColors[tagColors[item]]}55` }}
      >
        {item}
      </li>
    ));
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const blogTitle = this.props.match.params.title;
    const path = require(`../mds/${blogTitle}.md`);

    this.fetchContent(path);
    this.props.fetchBlogList();
  }

  renderContent = () => {
    if (this.props.thisBlog && this.state.content !== "") {
      const { title, description, tags } = this.props.thisBlog;
      return (
        <div className="blogContent">
          <div className="blogContent__contentHeader">
            <div className="blogContent__headerInside">
              <h1 className="blogContent__title">{title}</h1>
              <h2 className="blogContent__subtitle">{description}</h2>
              <ul className="blogContent__tags">{this.renderTags(tags)}</ul>
            </div>
          </div>
          <ReactMarkdown
            className="blogContent__markdown-body markdown-body"
            source={this.state.content}
          />
        </div>
      );
    }
    return null;
  };
  renderComment = () => {
    if (this.props.thisBlog && this.props.thisBlog.comment) {
      return <Comment id={this.props.thisBlog.id} />;
    }
  };

  render() {
    return (
      <>
        {this.renderContent()}
        <CSSTransition
          in={this.state.inProp}
          timeout={300}
          classNames="loadernode"
          unmountOnExit
        >
          <div>
            <Loader />
          </div>
        </CSSTransition>
        {this.renderComment()}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    thisBlog: state.blog.blogList.filter(
      item => item.title === ownProps.match.params.title
    )[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchBlogList }
)(BlogContent);
