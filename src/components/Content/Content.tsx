import { useState } from "react";
import { useFolderData } from "../../hooks/useFolderData";
import SearchBar from "../SearchBar/SearchBar";

import FolderList from "../Folder/FolderList";
import { ALL_LINKS_ID } from "../Folder/constants";
import { ALL_LINKS_NAME } from "../Folder/constants";
import styles from "./Content.module.css";

function Content() {
  const { folderData } = useFolderData();
  const [folderInfo, setFolderInfo] = useState([ALL_LINKS_ID, ALL_LINKS_NAME]); //수정-id name 하나로 관리할것...

  return (
    <div className={styles.wrap}>
      <div className={styles.spacing}>
        <SearchBar></SearchBar>
        {!folderData ? (
          <div className={styles.noLink}>저장된 링크가 없습니다.</div>
        ) : (
          <FolderList folderData={folderData} folderInfo={folderInfo} />
        )}
      </div>
    </div>
  );
}

export default Content;
