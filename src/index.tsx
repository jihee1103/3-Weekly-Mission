import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SharedLinkPage from "./pages/SharedLinkPage";
import FolderPage from "./pages/FolderPage";
import { RecoilRoot } from "recoil";
declare global {
  interface Window {
    Kakao: any;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <RecoilRoot>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="shared" element={<SharedLinkPage />} />
            <Route path="folder" element={<FolderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
);
