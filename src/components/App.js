import { useEffect, useState } from "react";

import FolderListPage from "../pages/FolderListPage";
import styles from "./App.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { getFolders, getUserProfile } from "../api/api";

function App() {
  const [folders, setFolders] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getFolders();
        const userProfile = await getUserProfile();

        if (!folders) return;
        setFolders(folders);
        setUserProfile(userProfile);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav userProfile={userProfile} />
      <div className={styles.body}>
        <FolderListPage folders={folders} />
      </div>
      <Footer />
    </>
  );
}

export default App;
