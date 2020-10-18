import React from "react";
import img from "../images/section-title.png";

export default function Title({ title, subTitle, color, subColor, aosType, aosDuration, aosDelay, aosOffset }) {
  return (
    <div className="section-title" data-aos={aosType} data-aos-duration={aosDuration} data-aos-delay={aosDelay} data-aos-offset={aosOffset}>
      <img src={img} alt="title" />
      <h6 style={(subColor = { color })}>{subTitle}</h6>
      <h1 style={(color = { color })}>{title}</h1>
    </div>
  );
}
