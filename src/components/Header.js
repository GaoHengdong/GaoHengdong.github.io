import React from "react";
import Mask from "./Mask";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clickMenu, clickToggleBtn, clickEmpty } from "../actions";
import "./Header.scss";

class Header extends React.Component {
  state = {
    showBackBtn: false
  };

  onLinkClick = () => {
    this.props.clickMenu();
  };
  onInputChange = e => {
    this.props.clickToggleBtn(e.target.checked);
  };
  onEmptyClick = e => {
    this.props.clickEmpty();
  };
  renderBackBtn() {
    return this.state.showBackBtn === true
      ? { display: "block" }
      : { display: "none" };
  }

  onRouteChanged() {
    if (this.props.location.pathname !== "/") {
      this.setState({ showBackBtn: true });
    } else {
      this.setState({ showBackBtn: false });
    }
  }
  componentDidMount() {
    this.onRouteChanged();
  }
  componentDidUpdate(preProps) {
    if (this.props.location !== preProps.location) {
      this.onRouteChanged();
    }
  }

  render() {
    return (
      <div className="header">
        <div className="flex flex-8 flex-maxwidth-500-8">
          <div style={{ width: "1rem" }}>
            <Link to="/">
              <span
                className="header__backbtn icon-277"
                style={this.renderBackBtn()}
              />
            </Link>
          </div>
        </div>
        <input
          type="checkbox"
          className="header__checkbox"
          id="header__checkbox"
          checked={this.props.isChecked}
          onChange={this.onInputChange}
        />

        <label htmlFor="header__checkbox" className="header__label">
          <span className="header__togglebtn icon-247" />
        </label>

        <Mask
          show={this.props.isChecked}
          onMaskClick={this.onEmptyClick}
          color="transparent"
        />

        <ul className="header__ul flex-2">
          <li>
            <Link to="/" onClick={this.onLinkClick}>
              <span className="icon-001" />
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link to="/aboutme" onClick={this.onLinkClick}>
              <span className="icon-336" />
              <span>me</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapSateToProps = state => {
  return {
    isChecked: state.headerMenu.isChecked
  };
};

export default withRouter(
  connect(
    mapSateToProps,
    { clickMenu, clickToggleBtn, clickEmpty }
  )(Header)
);
