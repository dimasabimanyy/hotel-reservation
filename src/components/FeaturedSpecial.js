import React from "react";
import Title from "./Title";
import titleImg from "../images/section-title.png";

function FeaturedSpecial() {
  return (
    <div id="featured-special">
      <div className="featured-special-wrap container">
        <Title
          title="Featured Specials"
          subTitle="Exclusive Offers"
          img={titleImg}
          color="#fff"
          subColor="#fff"
        />
        <div></div>
      </div>
    </div>
  );
}

export default FeaturedSpecial;
