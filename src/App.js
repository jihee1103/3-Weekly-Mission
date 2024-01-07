import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LinkShared from "./pages/LinkShared/LinkShared";
import Folder from "./pages/Folder/Folder";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/shared" element={<LinkShared />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
