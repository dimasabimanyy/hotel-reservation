import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"

function TopNav() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="top">
      <div className="top-nav container">
        <h6 className="top-phone" data-aos="fade-in" data-aos-delay="1200">+844 1800 33 555</h6>
        <h6 className="top-address" data-aos="fade-in" data-aos-delay="1200">
          736 Blue Spring Ave. Smithtown, NY 11787
        </h6>
      </div>
    </div>
  );
}

export default TopNav;
