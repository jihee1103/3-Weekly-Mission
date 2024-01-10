import { useState } from "react";
import "./FolderSection.css";
import ForderSearchInput from "./FolderSearchInput";
import FolderList from "./FolderList";
import FolderName from "./FolderName";
import FolderContentCard from "./FolderContentCard";

export default function FolderSection({ onOpenModal }) {
  const [selectedFolder, setSelectedFolder] = useState("$1");
  const handleSelectFolder = (folder) => {
    setSelectedFolder(folder);
  };
  console.log(selectedFolder);
  return (
    <section>
      <ForderSearchInput />
      <div className="foder-contents">
        <FolderList
          onOpenModal={onOpenModal}
          onSelectFolder={handleSelectFolder}
          selectedFolder={selectedFolder}
        />
        <FolderName onOpenModal={onOpenModal} selectedFolder={selectedFolder} />
        <FolderContentCard
          onOpenModal={onOpenModal}
          selectedFolder={selectedFolder}
        />
      </div>
    </section>
  );
}
