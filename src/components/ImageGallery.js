import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Room({ room, aosType, aosDuration, aosOnce }) {
  const { name, slug, images } = room;

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="single-img" data-aos={aosType} data-aos-duration={aosDuration} data-aos-once={aosOnce}>
      <Link to={`rooms/${slug}`}>
        <img src={images[0]} alt={name} />
      </Link>
    </div>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
