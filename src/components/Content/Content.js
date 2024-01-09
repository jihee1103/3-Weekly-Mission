import { useState } from "react";
import { useFolderData } from "../../hooks/useFolderData";
import SearchBar from "../SearchBar/SearchBar";

import FolderList from "../Folder/FolderList";
import "./Content.css";

function Content() {
  const { folderData } = useFolderData();
  const [folderId, setFolderId] = useState("all");

  return (
    <div className="wrap">
      <div className="spacing">
        <SearchBar></SearchBar>
        <FolderList folderData={folderData} folderId={folderId} />
      </div>
    </div>
  );
}

export default Content;
