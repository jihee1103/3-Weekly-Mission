import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FolderPage from "./page/FolderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
