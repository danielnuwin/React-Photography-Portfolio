import React, { Component } from 'react';
import './css/App.css';
//Components
import NavigationBar from './NavigationBar';
import Routes from './Routes'
import FooterPage from './Footer';
import Home from './Home'
import ScrollAnimation from 'react-animate-on-scroll';
import Headroom from 'react-headroom'
//Not Used
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    window.scroll({
      top: 70,
      behavior: "smooth"
    });
    // console.log("APPPPP: window did mount");

  }
  render() {
    return (
      <div>
        {/* <NavigationBar /> */}

        <Headroom >
          <NavigationBar />
          <div>
            <br />
            <h1 style={{ color: "transparent" }}>_</h1>
          </div>
        </Headroom>

        <Routes />
        <FooterPage />
      </div>
    );
  }
}

export default App;

