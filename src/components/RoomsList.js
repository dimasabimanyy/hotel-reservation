import React, { useEffect } from "react";
import Room from "./Room";

function RoomsList({ rooms, aosType, aosDuration }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center container">
        {rooms.map((item) => {
          return (
            <Room
              key={item.id}
              room={item}
              aosType={aosType}
              aosDuration={aosDuration}
            />
          );
        })}
      </div>
    </section>
  );
}

export default RoomsList;
