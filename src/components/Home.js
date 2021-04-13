import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
          <header className="globalStyle">
            <p>Hello user, please select a room to see booking hour availability</p>
            <h2>Coca rooms</h2>
              <Link to="/RoomView/01">Room C01</Link>
              <Link to="/RoomView/02">Room C02</Link>
              <Link to="/RoomView/03">Room C03</Link>
              <Link to="/RoomView/04">Room C04</Link>
              <Link to="/RoomView/05">Room C05</Link>
              <Link to="/RoomView/06">Room C06</Link>
              <Link to="/RoomView/07">Room C07</Link>
              <Link to="/RoomView/08">Room C08</Link>
              <Link to="/RoomView/09">Room C09</Link>
              <Link to="/RoomView/10">Room C10</Link>
            <h2>Pepsi rooms</h2>
              <Link to="/RoomView/01">Room P01</Link>
              <Link to="/RoomView/02">Room P02</Link>
              <Link to="/RoomView/03">Room P03</Link>
              <Link to="/RoomView/04">Room P04</Link>
              <Link to="/RoomView/05">Room P05</Link>
              <Link to="/RoomView/06">Room P06</Link>
              <Link to="/RoomView/07">Room P07</Link>
              <Link to="/RoomView/08">Room P08</Link>
              <Link to="/RoomView/09">Room P09</Link>
              <Link to="/RoomView/10">Room P10</Link>
          </header>
        </div>
      );
    }

    export default Home;
