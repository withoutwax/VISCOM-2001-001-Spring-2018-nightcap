import React, { Component } from 'react';
import './About.css';

import mig_reyes from '../assets/about/mig-reyes.png';
import amy_shwartz from '../assets/about/amy-shwartz.png';
import eileen_tjan from '../assets/about/eileen-tjan.png';
import aiga_chicago from '../assets/about/aiga-chicago.png';

class About extends Component {
  render() {
    return (
      <div>
        <section className="about-container padding-right-100">
          <div className="about-section-01-01">
            <h2>guests</h2>
          </div>
          <div className="about-section-02-01">
            <h2>mig ryes,</h2>
            <h2>amy schwartz,</h2>
            <h2>eileen tjan,</h2>
            <h2>aiga chicago</h2>
          </div>
          <div className="about-section-01-02">
            <h2>sponsors</h2>
          </div>
          <div className="about-section-02-02">
            <h2>chicago's historic gems,</h2>
            <h2>the merchandise mart,</h2>
            <h2>tony junior</h2>
          </div>
          <div className="about-section-03">
            <img src={mig_reyes} />
            <img src={amy_shwartz} />
            <img src={eileen_tjan} />
            <img src={aiga_chicago} />
          </div>
        </section>
      </div>
    );
  }
}

export default About;
