import React, { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"

function FeaturedSpecialItem({ title, subTitle, img, aosType, aosDuration, aosDelay }) {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="special-item zoom-n-rotate" data-aos={aosType} data-aos-duration={aosDuration} data-aos-delay={aosDelay}>
      <img src={img} alt={title} />
      <div>
        <div className="black-shadow"></div>
        <h6 className="subTitle">{subTitle}</h6>
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
}

export default FeaturedSpecialItem;
