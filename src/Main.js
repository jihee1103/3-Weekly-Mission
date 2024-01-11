import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import "./styles/global.css";
import { getUser, getFolder, getSampleFolder } from "./api";

const Main = () => {
  const [user, setUser] = useState({});
  const [folderObj, setFolderObj] = useState({});
  const [sampleFolderObj, setSampleFolderObj] = useState({});
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async () => {
    try {
      setLoadingError(null);
      const userBody = await getUser();
      const folderBody = await getFolder();
      setUser(userBody.data[0]);
      setFolderObj(folderBody.data);
    } catch (error) {
      setLoadingError(error);
      return;
    }
  };

  const handleSampleLoad = async () => {
    try {
      setLoadingError(null);
      const folderBody = await getSampleFolder();
      setSampleFolderObj(folderBody);
    } catch (error) {
      setLoadingError(error);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
    handleSampleLoad();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App user={user} />}>
          <Route path="shared" element={<SharedPage sampleFolderObj={sampleFolderObj} loadingError={loadingError} />} />
        </Route>

        <Route path="folder" element={<FolderPage user={user} folderObj={folderObj} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
