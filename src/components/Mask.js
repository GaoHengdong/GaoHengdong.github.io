import React from "react";
import "./Mask.scss";

class Mask extends React.Component {
  renderMask(color = "rgba(128, 128, 128, 0.219)") {
    return {
      backgroundColor: color
    };
  }
  render() {
    const { show, onMaskClick, color } = this.props;
    if (show) {
      return (
        <div
          className="mask"
          style={this.renderMask(color)}
          onClick={onMaskClick}
        />
      );
    } else {
      return <></>;
    }
  }
}

export default Mask;
