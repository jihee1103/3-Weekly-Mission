import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import { getSampleUser, getSampleFolder } from "./api";
import "./styles/global.css";

const App = () => {
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
        <Route path="/shared" element={<SharedPage user={user} folderObj={folderObj} loadingError={loadingError} />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
