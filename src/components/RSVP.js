import React, { Component } from 'react';
import RSVPForm from './RSVPForm';

class Rsvp extends Component {
  render() {
    return (
      <div>
        <section className="rsvp-container">
          <h1>
            join for a drink, a late night snack.<br />
            ask mig, amy and eileen the questions you weren’t <br />
            able to during their brand new presentations.
          </h1>
          <article className="rsvp-input">
            <RSVPForm />
          </article>
        </section>
      </div>
    );
  }
}

export default Rsvp;
