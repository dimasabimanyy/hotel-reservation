import React from "react";

export const Banner = ({ title, subTitle, children, aosType, aosDuration, aosDelay, aosOnce }) => {
  return (
    <div className="banner" data-aos={aosType} data-aos-duration={aosDuration} data-aos-delay={aosDelay} data-aos-once={aosOnce}>
      <h1>{title}</h1>
      <div></div>
      <p>{subTitle}</p>
      {children}
    </div>
  );
};
