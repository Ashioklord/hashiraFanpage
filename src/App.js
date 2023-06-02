import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./components/Home/MainHeader";
import HomePage from "./components/Home/HomePage";
import Rengoku from "./components/HashiraPages/Rengoku";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Rengoku" element={<Rengoku />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
