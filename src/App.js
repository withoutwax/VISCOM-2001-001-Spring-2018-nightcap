import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './shared/modular.css';

import Header from './shared/Header';
import Home from './components/Home';
import About from './components/About';
import Rsvp from './components/RSVP';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/rsvp" component={Rsvp} />
        </div>
      </Router>
    );
  }
}

export default App;
