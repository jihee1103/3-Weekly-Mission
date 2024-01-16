import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

const App = function () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
