import { useState } from "react";
import "./FolderSection.css";
import ForderSearchInput from "./FolderSearchInput";
import FolderList from "./FolderList";
import FolderName from "./FolderName";
import FolderContentCard from "./FolderContentCard";

export default function FolderSection() {
  const [selectedFolder, setSelectedFolder] = useState();
  const handleSelectFolder = (folder) => {
    setSelectedFolder(folder);
  };

  return (
    <section>
      <ForderSearchInput />
      <div className="foder-contents">
        <FolderList onSelectFolder={handleSelectFolder} />
        <FolderName selectedFolder={selectedFolder} />
        <FolderContentCard selectedFolder={selectedFolder} />
      </div>
    </section>
  );
}
