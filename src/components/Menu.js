import React, { Component } from "react";
import Mask from "./Mask";
import "./Menu.scss";

export default class Menu extends Component {
  state = {
    checked: false
  };

  onMaskClick = () => {
    this.setState({ checked: false });
  };
  onInputChange = e => {
    this.setState({ checked: e.target.checked });
  };
  onEmptyCLick = () => {
    this.setState({ checked: false });
  };

  render() {
    const { width, renderList } = this.props;
    return (
      <div className="menu">
        <input
          type="checkbox"
          className="menu__checkbox"
          id="menu__checkbox"
          checked={this.state.checked}
          onChange={this.onInputChange}
        />

        <Mask
          show={this.state.checked}
          onMaskClick={this.onMaskClick}
          color={"transparent"}
        />
        <label htmlFor="menu__checkbox" className="menu__label">
          <i className="icon-247" />
        </label>
        <div className="menu__list" style={{ width: width }}>
          <ul className="menu__ul">{renderList}</ul>
        </div>
      </div>
    );
  }
}
