import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  defaultColors,
  classification as classificationcfg,
  tagColors
} from "../datas/config";
import "./BlogItem.scss";

export default class BlogItem extends Component {
  renderIcon() {
    const c = classificationcfg[this.props.classification];
    return {
      color: defaultColors[c.color],
      icon: c.icon
    };
  }
  renderTags() {
    const { tags, id } = this.props;
    return tags.map(tag => (
      <li
        key={`item-${id}-tag-${tag}`}
        style={{ backgroundColor: defaultColors[tagColors[tag]] }}
      >
        {tag}
      </li>
    ));
  }
  render() {
    const { title, description } = this.props; //还有tags id  classification

    return (
      <Link className="blog-item__link" to={`/blog/${title}`}>
        <div
          className="blog-item"
          style={{ animationDelay: `${this.props.animationdelay}ms` }}
        >
          <div className="blog-item__imagebox">
            <i
              className={this.renderIcon().icon}
              style={{ color: this.renderIcon().color }}
            />
          </div>
          <div className="blog-item__rightcontainer">
            <div className="blog-item__title">{title}</div>
            <div className="blog-item__description">{description}</div>
            <div className="blog-item__tags">
              <ul>{this.renderTags()}</ul>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
