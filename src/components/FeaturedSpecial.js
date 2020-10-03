import React from "react";
import Title from "./Title";
import FeaturedSpecialItem from "./FeaturedSpecialItem";
import img1 from "../images/special-item-1.jpg";
import img2 from "../images/special-item-2.jpg";
import goldBg from "../images/gold-bg.jpg";
import { Link } from "react-router-dom";

function FeaturedSpecial() {
  return (
    <div className="featured-special">
      <div className="featured-special-wrap container">
        <Title
          title="Featured Specials"
          subTitle="Exclusive Offers"
          color="#fff"
          subColor="#fff"
        />
        <div className="special-item-wrap">
          <FeaturedSpecialItem
            subTitle="up to 30% off"
            title="Kick off summer in NYC"
            img={img1}
          />
          <div className="special-gold">
            <img src={goldBg} alt="Breakfast Package" />
            <div>
              <h6>Only This Week</h6>
              <h3>$5 Breakfast package at central market</h3>
              <p>
                Start your day with ourt $5 Breakfast on the go package at
                central market
              </p>
              <Link to="/rooms" className="btn-primary to-special-featured">
                Learn More <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
          <FeaturedSpecialItem
            subTitle="up to 30% off"
            title="Kick off summer in NYC"
            img={img2}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedSpecial;
