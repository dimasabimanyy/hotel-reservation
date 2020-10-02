import React from "react";

export default function Title({ title, subTitle, img, color, subColor }) {
  return (
    <div className="section-title">
      <img src={img} alt="title" />
      <h6 style={(subColor = { color })}>{subTitle}</h6>
      <h1 style={(color = { color })}>{title}</h1>
    </div>
  );
}
