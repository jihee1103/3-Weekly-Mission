import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import SharedListPage from "./pages/SharedListPage";
import FolderListPage from "./pages/FolderListPage";
import "./styles/global.css";
import { getUser, getFolder, getSampleFolder } from "./api";
import { Folder, SampleFolder, User } from "./types";

const Main = () => {
  const [user, setUser] = useState<User>();
  const [folderList, setFolderList] = useState<Folder[]>();
  const [sampleFolderObj, setSampleFolderObj] = useState<SampleFolder>();
  const [loadingError, setLoadingError] = useState("");

  const handleLoad = async () => {
    try {
      setLoadingError("");
      const userBody = await getUser();
      const folderBody = await getFolder();
      setUser(userBody.data[0]);
      setFolderList(folderBody.data);
    } catch (error) {
      if (error instanceof ReferenceError) {
        setLoadingError(error.message);
      } else {
        throw error;
      }
    }
  };

  const handleSampleLoad = async () => {
    try {
      setLoadingError("");
      const folderBody = await getSampleFolder();
      setSampleFolderObj(folderBody.folder);
    } catch (error) {
      if (error instanceof ReferenceError) {
        setLoadingError(error.message);
      } else {
        throw error;
      }
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
          <Route
            path="shared"
            element={
              sampleFolderObj ? (
                <SharedListPage folderObj={sampleFolderObj} loadingError={loadingError} />
              ) : (
                <h1>...Loading...</h1>
              )
            }
          />
        </Route>

        <Route path="folder" element={<FolderListPage user={user} folderList={folderList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
