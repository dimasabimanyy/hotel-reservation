/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Maps() {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=erios&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Maps;
