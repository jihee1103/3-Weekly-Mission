import { useState, useEffect } from "react";
import SharedPage from "./pages/SharedPage";
import { getSampleUser, getSampleFolder } from "./api";
import "./styles/global.css";

const App = () => {
  const [user, setUser] = useState({});
  const [folderObj, setFolderObj] = useState({});
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async () => {
    let userBody;
    let folderBody;

    try {
      setLoadingError(null);
      userBody = await getSampleUser();
      folderBody = await getSampleFolder();
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
    <>
      <SharedPage user={user} folderObj={folderObj} />
      {loadingError && <p>{loadingError.message}</p>}
    </>
  );
};

export default App;
