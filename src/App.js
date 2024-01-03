import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

import "./styles/App.css";

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <div>
      <Navbar innerWidth={innerWidth}></Navbar>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
