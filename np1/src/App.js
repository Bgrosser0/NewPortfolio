import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>

          <Route exact path="/" component={LandingPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={AboutMe} />
  
        </div>
      </Router>
    );
  }
}

export default App;
