import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/products" />
          <Route path="/contact" />
          <Route path="/about" />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
