import React from "react";

export default function Title({ title, subTitle, img }) {
  return (
    <div className="section-title">
      <img src={img} alt="title" />
      <h6>{subTitle}</h6>
      <h1>{title}</h1>
      <div></div>
    </div>
  );
}
