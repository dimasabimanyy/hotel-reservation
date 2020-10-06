import React from "react";
import Hero from "../components/Hero";
import { Banner } from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import GalleryContainer from "../components/GalleryContainer";

export const Gallery = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Gallery"></Banner>
      </Hero>
      <GalleryContainer />
    </React.Fragment>
  );
};
