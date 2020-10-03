import React from "react";
import bgImg from "../images/exp-bg.jpg";
import expImg from "../images/experience.png";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <section className="experience">
      <img src={bgImg} alt="hotel experience" className="experience-bg" />
      <div className="experience-info container">
        <img src={expImg} alt="experience" className="experience-word" />
        <h3>Exclusive Complimentary Services</h3>
        <p className="experience-contact">
          Call us on <span>(+844) 1800 3377</span> or Email us
          <span> services@erios.com</span>
        </p>
        <Link to="/rooms" className="btn-primary btn-experience">
          Join Us Now <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
      </div>
    </section>
  );
}

export default Experience;
