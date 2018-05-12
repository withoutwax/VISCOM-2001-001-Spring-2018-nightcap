import React, { Component } from 'react';
import './Home.css';

import nightcapLogo from '../assets/nightcap-logo.png';

class Home extends Component {
  render() {
    return (
      <section className="home-container">
        <article className="home-title">
          <img src={nightcapLogo}/>
          <div id="home-nightcap-title">nightcap</div>
        </article>
        <article className="home-date">
          <h2>9/14</h2>
        </article>
      </section>
    );
  }
}

export default Home;
