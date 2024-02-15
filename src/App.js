import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FolderPage from "./page/FolderPage";
import SharedPage from "./page/SharedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/folder" element={<FolderPage />} />
          <Route path="/shared" element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
