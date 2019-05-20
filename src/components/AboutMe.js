import React from "react";
import "./AboutMe.scss";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutme">
        <div className="aboutme__container">
          <h1 className="aboutme__card">Henry</h1>
          <p>喜欢有趣的事物</p>
          <p>讨厌不有趣的事物</p>
          <p>精通JavaScript,Python,Java写helloworld</p>
          <p>讨厌忙碌的生活又不想闲下来</p>
          <p>
            喜欢没事的时候喝喝酸奶
            <i className="icon-336" />
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
