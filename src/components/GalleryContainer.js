import React, { useEffect } from "react";
import ImageGallery from "./ImageGallery";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

function GalleryContainer({ context }) {
  const { loading, rooms } = context;

  useEffect(() => { 
    Aos.init()
  }, [])

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
          return <ImageGallery key={item.id} room={item} aosType="fade-up" aosDuration="1000" aosOnce="true" />;
        })}
      </div>
      <Link to="#" className="btn-primary sign-up-gallery" data-aos="fade-up" data-aos-duration="1000">
        Sign me up <i className="fas fa-long-arrow-alt-right"></i>
      </Link>
    </section>
  );
}

export default withRoomConsumer(GalleryContainer);
