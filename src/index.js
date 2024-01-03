import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./pages/App";
import FolderPage from "./pages/FolderPage/FolderPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/shared" element={<App />} />
      <Route path="/folder" element={<FolderPage />} />
    </Routes>
  </BrowserRouter>
);
