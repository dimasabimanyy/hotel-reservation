import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images } = room;
  return (
    <div className="single-img">
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
