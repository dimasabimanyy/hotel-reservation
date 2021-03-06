import React from "react";
import "./css/App.css";
import "./css/Home.css";
import "./css/Rooms.css";
import "./css/Gallery.css";
import "./css/Contact.css";
import "./css/Tablet.css";
import Home from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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
        <Route exact path="/gallery/" component={Gallery} />
        <Route exact path="/contact/" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
