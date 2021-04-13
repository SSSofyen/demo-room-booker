import React from "react";
import { Link, useParams } from "react-router-dom";
import HourView from "../reusables components/HourView";

const RoomView = () => {
  let { roomNumber } = useParams();
  return (
    <div className="globalStyle">
      <Link to="/">Back to Home</Link>
      <p>roomview {roomNumber} </p>
      <div className="row">
        <div className="column">
          <p>12pm</p>
          <HourView />
          <p>1am</p>
          <HourView />
          <p>2am</p>
          <HourView />
          <p>3am</p>
          <HourView />
          <p>4am</p>
          <HourView />
          <p>5am</p>
          <HourView />
          <p>6am</p>
          <HourView />
          <p>7am</p>
          <HourView />
          <p>8am</p>
          <HourView />
          <p>9am</p>
          <HourView />
          <p>10am</p>
          <HourView />
          <p>11am</p>
          <HourView />

        </div>
        <div className="column">
        <p>12am</p>
        <HourView />
        <p>1pm</p>
        <HourView />
        <p>2pm</p>
        <HourView />
        <p>3pm</p>
        <HourView />
        <p>4pm</p>
        <HourView />
        <p>5pm</p>
        <HourView />
        <p>6pm</p>
        <HourView />
        <p>7pm</p>
        <HourView />
        <p>8pm</p>
        <HourView />
        <p>9pm</p>
        <HourView />
        <p>10pm</p>
        <HourView />
        <p>11pm</p>
        <HourView />

        </div>
      </div>
    </div>
  );
};

export default RoomView;
