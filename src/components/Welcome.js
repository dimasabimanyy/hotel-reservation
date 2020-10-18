import React, { useEffect } from "react";
import Title from "./Title";
import welcomeImg from "../images/welcome.png";
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css"

function Welcome() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div id="welcome">
      <div className="welcome-wrap container">
        <div className="welcome-info" data-aos="fade-right">
          <Title title="Upgrade Your Experience" subTitle="welcome"/>
          <p>
            Enjoy sweeping water views when you reserve a Hudson River View
            Suite. Spread out in an Executive or Luxury Suite with over 700
            square feet of lavish living areas with integrated technology. Live
            the New York lifestyle in the Conrad Suite, featuring an office and
            separate living and dining areas.
          </p>
          <Link to="#" className="btn-primary btn-welcome">
            Read More <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
        <div className="welcome-img"  data-aos="fade-left">
          <img src={welcomeImg} alt="welcome to erios" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
