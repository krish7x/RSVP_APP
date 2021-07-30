import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route exact path="/second">
            <SecondPage />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
