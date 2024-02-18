"use client";

import { useContext } from "react";
import { FolderPageStateContext } from "../../app/folder/page";
import styles from "./index.module.css";

const FolderNameButton = () => {
  const context = useContext(FolderPageStateContext);
  if (!context) {
    return null;
  }
  const { foldersNameData, handleClickFilterFolder } = context;

  return (
    <nav className={styles.nav}>
      {foldersNameData.map((folder) => (
        <button
          key={folder.id}
          onClick={() => {
            handleClickFilterFolder(folder.name);
          }}
        >
          {folder.name}
        </button>
      ))}
    </nav>
  );
};
export default FolderNameButton;
