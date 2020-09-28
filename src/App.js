import React from "react";
import "./css/App.css";
import "./css/Home.css";
import "./css/Rooms.css";
import "./css/Gallery.css";
import "./css/Contact.css";
import "./css/Footer.css";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
