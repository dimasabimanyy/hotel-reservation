import React from "react";

function FeaturedSpecialItem({ title, subTitle, img }) {
  return (
    <div className="special-item zoom-n-rotate">
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
