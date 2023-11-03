import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";


import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}