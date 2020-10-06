import React from "react";
import Hero from "../components/Hero";
import { Banner } from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

export const Rooms = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Gallery">
          {/* <Link to="/" className="btn-primary to-home-room">
            Back to Home
          </Link> */}
        </Banner>
      </Hero>
      <RoomsContainer></RoomsContainer>
    </React.Fragment>
  );
};
