import { useState } from "react";
import { useFolderData } from "../../hooks/useFolderData";
import SearchBar from "../SearchBar/SearchBar";

import FolderList from "../Folder/FolderList";
import { ALL_LINKS_ID } from "../Folder/constants";
import { ALL_LINKS_NAME } from "../Folder/constants";
import "./Content.css";

function Content() {
  const { folderData } = useFolderData();
  const [folderId, setFolderId] = useState(ALL_LINKS_ID);
  const [folderName, setFolderName] = useState(ALL_LINKS_NAME);

  return (
    <div className="wrap">
      <div className="spacing">
        <SearchBar></SearchBar>
        <FolderList
          folderData={folderData}
          folderId={folderId}
          folderName={folderName}
        />
      </div>
    </div>
  );
}

export default Content;
