import React, { useEffect, useState } from "react";

function HourView() {
  const [availability, setAvailability] = useState("available for booking");

  function handleClick(e) {
    e.preventDefault();
    if (availability === "available for booking") {
        setAvailability("you booked this time");
    } else {
        setAvailability("available for booking");
  
    }
  }

  return (
    <div className={`${availability === "available for booking" ? "hourAvailable" : "hourUnavailable"}`} onClick={handleClick}>
      {availability}
    </div>
  );
}

export default HourView;
