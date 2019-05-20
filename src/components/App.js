import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import BlogContent from "./BlogContent";
import "./App.scss";

class App extends React.Component {
  componentDidUpdate() {
    console.log(111);
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Route path="/" exact component={Blog} />
          <Route path="/aboutme" exat component={AboutMe} />
          <Route path="/blog/:title" exat component={BlogContent} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
