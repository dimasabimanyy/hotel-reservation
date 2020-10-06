import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import Hero from "../components/Hero";

const Error = () => {
  return (
    <div>
      <Hero>
        <Banner title="404" subTitle="page not found">
          <Link to="/" className="btn-primary to-home-room">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Error;
