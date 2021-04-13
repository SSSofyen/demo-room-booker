import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import RoomView from "./components/RoomView.js";

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/RoomView/:roomNumber" children={<RoomView />}>
              <RoomView />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
