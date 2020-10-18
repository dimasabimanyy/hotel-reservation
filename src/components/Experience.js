import React, { useEffect } from "react";
import bgImg from "../images/exp-bg.jpg";
import expImg from "../images/experience.png";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Experience() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <section className="experience">
      <img src={bgImg} alt="hotel experience" className="experience-bg"/>
      <div className="experience-info container">
        <img src={expImg} alt="experience" className="experience-word" data-aos="fade-in" data-aos-duration="1200" data-aos-once="false" data-aos-delay="400"/>
        <h3 data-aos="fade-in" data-aos-duration="1200" data-aos-once="false" data-aos-delay="400">Exclusive Complimentary Services</h3>
        <p className="experience-contact"  data-aos="fade-in" data-aos-duration="1200" data-aos-once="false" data-aos-delay="400">
          Call us on <span>(+844) 1800 3377</span> or Email us
          <span> services@erios.com</span>
        </p>
        <Link to="#" className="btn-primary btn-experience" data-aos="fade-in" data-aos-duration="1200" data-aos-once="false" data-aos-delay="400">
          Join Us Now <i className="fas fa-long-arrow-alt-right"  ></i>
        </Link>
      </div>
    </section>
  );
}

export default Experience;
