import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navigation-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rsvp">RSVP</Link>
      </nav>
    );
  }
}

export default Header;
