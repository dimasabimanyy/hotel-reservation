import React from "react";
import Maps from "./Maps";
import { Link } from "react-router-dom";

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="form-wrap container">
        <div className="form">
          <h3>Feedback Form</h3>
          <p>
            If you have any question, please don't hesitate to send us any
            message.
          </p>
          <form className="form-contact">
            <div>
              <input placeholder="Your Name" type="text" />
            </div>
            <div>
              <input placeholder="Your Email" type="text" />
            </div>
            <div>
              <input placeholder="Subject (Optional)" type="text" />
            </div>
            <div className="msg-field">
              <textarea placeholder="Here goes your message.."></textarea>
            </div>
            <div>
              <Link to="#" className="btn-primary send-message">
                Send Message <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </form>
        </div>
        <div className="map">
          <Maps />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
