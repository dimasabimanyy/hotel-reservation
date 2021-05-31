import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./context";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
