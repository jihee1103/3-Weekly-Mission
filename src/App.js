import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
