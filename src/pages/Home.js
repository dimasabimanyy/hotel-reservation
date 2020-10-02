import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import FeaturedSpecial from "../components/FeaturedSpecial";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Welcome from "../components/Welcome";
import HomeTitle from "../images/home-title.png";

export const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title={<img src={HomeTitle} alt="Summer Vacations" />}
          subTitle="Memories that will last forever"
        >
          <Link to="/rooms" className="btn-primary to-room">
            View Our Rooms <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </Banner>
      </Hero>
      {/* <Services /> */}
      <Welcome />
      <FeaturedSpecial />
      <FeaturedRooms />
    </React.Fragment>
  );
};
