import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogList } from "../actions";

import BlogItemContainer from "./BlogItemContainer";
import BlogItem from "./BlogItem";
import Menu from "./Menu";
import Pagination from "./Pagination";

import { pageConfig, tagColors, defaultColors } from "../datas/config";
import "./BlogBody.scss";

class BlogBody extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
    this.state = {
      tagList: []
    };
  }
  createTagList() {
    return Object.keys(tagColors).reduce(function(result, key) {
      result.push({
        name: key,
        color: defaultColors[tagColors[key]]
      });
      return result;
    }, []);
  }
  renderTagList(list) {
    const all = (
      <li
        id={`tag-all`}
        key={`tag-all`}
        style={{ backgroundColor: "#9CADBC" }}
        onClick={this.onTagClick}
      >
        all
      </li>
    );
    const tags = list.map(({ name, color }) => (
      <li
        id={`tag-${name}`}
        key={`tag-${name}`}
        style={{ backgroundColor: color }}
        onClick={this.onTagClick}
      >
        {name}
      </li>
    ));
    return [all, ...tags];
  }
  renderBlogItems() {
    const { page, blogList } = this.props;
    const num = pageConfig.numPerPage;
    const list = blogList.slice((page - 1) * num, page * num);
    return list.map((item, index) => (
      <BlogItem
        key={`blogitem-${item.id}`}
        {...item}
        animationdelay={index * 100}
      />
    ));
  }
  onTagClick = e => {
    this.menuRef.current.onEmptyCLick();
    this.props.fetchBlogList(e.target.innerHTML);
  };
  componentDidMount() {
    this.props.fetchBlogList(this.props.tag);

    this.setState({
      tagList: this.createTagList()
    });
  }

  render() {
    return (
      <>
        <div className="blog-body">
          <div className="blog-body__container">
            <div className="blog-body__top">
              <div className="blog-body__title">my posts</div>
              <div className="blog-body__tags">
                <Menu
                  renderList={this.renderTagList(this.state.tagList)}
                  ref={this.menuRef}
                />
              </div>
            </div>
            <BlogItemContainer>
              {this.renderBlogItems()}
              <Pagination />
            </BlogItemContainer>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogList: state.blog.blogList,
    page: state.blog.page,
    tag: state.blog.tag
  };
};

export default connect(
  mapStateToProps,
  { fetchBlogList }
)(BlogBody);
