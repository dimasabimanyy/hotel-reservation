import React from "react";
import Hero from "../components/Hero";
import { Banner } from "../components/Banner";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export const Contact = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Contact"></Banner>
      </Hero>
      <ContactInfo />
      <ContactForm />
    </React.Fragment>
  );
};
