import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImg from "../images/room-1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Room({ room, aosType, aosDuration }) {
  const { name, slug, images, price, size, type } = room;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="room" data-aos={aosType} data-aos-duration={aosDuration}>
      <div className="img-container img-hover-zoom">
        <Link to={`rooms/${slug}`}>
          <img src={images[0] || defaultImg} alt="Room" />
          <div className="img-shadow"></div>
          <div className="room-price">
            <p>From </p>
            <p>
              <span>${price}</span> /night
            </p>
          </div>
        </Link>
      </div>
      <div className="room-info">
        <Link to={`rooms/${slug}`}>
          <h4>{name}</h4>
        </Link>
        <div className="room-additional-info">
          <p className="room-size-single">{size} SQ</p>|
          <p className="room-type">{type}</p>
        </div>
      </div>
    </div>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
