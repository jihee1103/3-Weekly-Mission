import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import "./styles/global.css";
import { getSampleUser, getSampleFolder } from "./api";

const Main = () => {
  const [user, setUser] = useState({});
  const [folderObj, setFolderObj] = useState({});
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async () => {
    try {
      setLoadingError(null);
      const userBody = await getSampleUser();
      const folderBody = await getSampleFolder();
      setUser(userBody);
      setFolderObj(folderBody);
    } catch (error) {
      setLoadingError(error);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App user={user} />}>
          <Route path="shared" element={<SharedPage folderObj={folderObj} loadingError={loadingError} />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
