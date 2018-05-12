import React, { Component } from 'react';
import './RSVPForm.css';

class RSVPForm extends Component {
  render() {
    return (
      <article className="contact-section-00-banner-text">
        <span className="input input--isao" id="first-name">
          <input className="input__field input__field--isao" type="text" id="input-38" />
          <label className="input__label input__label--isao" for="input-38" data-content="First Name">
            <span className="input__label-content input__label-content--isao">First Name</span>
          </label>
        </span>
        <span className="input input--isao" id="last-name">
          <input className="input__field input__field--isao" type="text" id="input-39" />
          <label className="input__label input__label--isao" for="input-39" data-content="Middle Name">
            <span className="input__label-content input__label-content--isao">Last Name</span>
          </label>
        </span>
        <span className="input input--isao" id="email">
          <input className="input__field input__field--isao" type="text" id="input-40" />
          <label className="input__label input__label--isao" for="input-40" data-content="Last Name">
            <span className="input__label-content input__label-content--isao">email</span>
          </label>
        </span>
        <span className="input input--isao" id="no-attendees">
          <input className="input__field input__field--isao" type="text" id="input-40" />
          <label className="input__label input__label--isao" for="input-40" data-content="Last Name">
            <span className="input__label-content input__label-content--isao">no. of attendees</span>
          </label>
        </span>
        <span className="input input--isao" id="message">
          <input className="input__field input__field--isao" type="text" id="input-40" />
          <label className="input__label input__label--isao" for="input-40" data-content="Last Name">
            <span className="input__label-content input__label-content--isao">Message</span>
          </label>
        </span>
        <span class="input input--isao" id="rsvp-button">
          <button id="button-submit">
            Submit
          </button>
        </span>
      </article>
    );
  }
}

export default RSVPForm;
