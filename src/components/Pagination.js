import React, { Component } from "react";
import { connect } from "react-redux";
import { nextPage, previousPage } from "../actions";
import "./Pagination.scss";

class Pagination extends Component {
  renderPreviousBtn() {
    //如果不是第一页
    if (this.props.page !== 1) {
      return (
        <div
          className="pagination__btn pagination__btn--previous"
          onClick={() => this.props.previousPage()}
        >
          <i className="icon-277" />
        </div>
      );
    } else {
      return null;
    }
  }
  renderNextBtn() {
    //如果不是最后一页
    if (this.props.page !== this.props.pageNum) {
      return (
        <div
          className="pagination__btn pagination__btn--next"
          onClick={() => this.props.nextPage()}
        >
          <i className="icon-276" />
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="pagination">
        {this.renderPreviousBtn()}
        <div className="pagination flex-1" />
        {this.renderNextBtn()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pageNum: state.blog.pageNum,
    page: state.blog.page
  };
};

export default connect(
  mapStateToProps,
  { nextPage, previousPage }
)(Pagination);
