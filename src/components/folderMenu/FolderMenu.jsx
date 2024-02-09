import { useEffect, useState } from "react";
import { getFoldersById } from "../../api/api";
import styles from "./FolderMenu.module.css";
import FolderSelector from "./folderSelector/FolderSelector";
import FolderEditor from "./folderEditor/FolderEditor";
import AddFolderButton from "./addFolderButton/AddFolderButton";
import FloatingActionButton from "./addFolderButton/FloatingActionButton";

function FolderMenu({ onClick, onModalClick }) {
  const [folders, setFolders] = useState(null);
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const isEditable = currentFolderName !== "전체";
  const isMobile = window.innerWidth <= 767;

  const handleClick = (folder) => {
    setCurrentFolderName(folder.name || "전체");
    return onClick(folder);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getFoldersById(1);

        if (!folders?.data) return;
        setFolders([...folders.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.upperMenu}>
        <FolderSelector
          className={styles.folderSelector}
          onClick={handleClick}
          folders={folders}
        />
        {isMobile ? (
          <FloatingActionButton
            className={styles.addFolderFAB}
            onModalClick={onModalClick}
          />
        ) : (
          <AddFolderButton
            className={styles.addFolder}
            onModalClick={onModalClick}
          />
        )}
      </div>
      <div className={styles.folderOption}>
        <h2 className={styles.title}>{currentFolderName}</h2>
        {isEditable && <FolderEditor onModalClick={onModalClick} />}
      </div>
    </>
  );
}

export default FolderMenu;
