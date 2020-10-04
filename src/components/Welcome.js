import React from "react";
import Title from "./Title";
import welcomeImg from "../images/welcome.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div id="welcome">
      <div className="welcome-wrap container">
        <div className="welcome-info">
          <Title title="Upgrade Your Experience" subTitle="welcome" />
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
        <div className="welcome-img">
          <img src={welcomeImg} alt="welcome to erios" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
