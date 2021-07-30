import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right"></div>
      </div>
    </Router>
  );
}

export default App;
