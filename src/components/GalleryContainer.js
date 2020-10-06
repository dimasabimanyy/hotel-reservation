import React from "react";
import ImageGallery from "./ImageGallery";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function GalleryContainer({ context }) {
  const { loading, rooms } = context;

  if (rooms.length === 0) {
    return (
      <div className="image-not-avaliable">
        <h3>No Image Available</h3>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="gallery">
      <div className="gallery-wrap container">
        {rooms.map((item) => {
          return <ImageGallery key={item.id} room={item} />;
        })}
      </div>
      <Link to="/" className="btn-primary sign-up-gallery">
        Sign me up <i className="fas fa-long-arrow-alt-right"></i>
      </Link>
    </section>
  );
}

export default withRoomConsumer(GalleryContainer);
