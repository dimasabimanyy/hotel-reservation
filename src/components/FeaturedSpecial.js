import React, { useEffect } from "react";
import Title from "./Title";
import FeaturedSpecialItem from "./FeaturedSpecialItem";
import img1 from "../images/special-item-1.jpg";
import img2 from "../images/special-item-2.jpg";
import goldBg from "../images/gold-bg.jpg";
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css"

function FeaturedSpecial() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="featured-special">
      <div className="featured-special-wrap container">
        <Title
          title="Featured Specials"
          subTitle="Exclusive Offers"
          color="#fff"
          subColor="#fff"
          aosType="fade-in"
          aosDuration="1000"
        />
        <div className="special-item-wrap">
          <FeaturedSpecialItem
            subTitle="up to 30% off"
            title="Kick off summer in NYC"
            img={img1}
            aosType="fade-up"
            aosDuration="500"
            aosDelay="200"
          />
          <div className="special-gold" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <img src={goldBg} alt="Breakfast Package" />
            <div>
              <h6>Only This Week</h6>
              <h3>$5 Breakfast package at central market</h3>
              <p>
                Start your day with ourt $5 Breakfast on the go package at
                central market
              </p>
              <Link to="#" className="btn-primary to-special-featured">
                Learn More <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
          <FeaturedSpecialItem
            subTitle="up to 30% off"
            title="Kick off summer in NYC"
            img={img2}
            aosType="fade-up"
            aosDuration="1500"
            aosDelay="200"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedSpecial;
