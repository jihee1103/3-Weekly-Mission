import { useState } from "react";
import ForderSearchInput from "./FolderSearchInput";
import FolderList from "./FolderList";
import FolderName from "./FolderName";
import FolderContentCard from "./FolderContentCard";
import styled from "styled-components";

export default function FolderSection() {
  const [selectedFolder, setSelectedFolder] = useState("전체");
  const handleSelectFolder = (folder) => {
    setSelectedFolder(folder);
  };
  return (
    <Section>
      <ForderSearchInput />
      <div className="foder-contents">
        <FolderList
          onSelectFolder={handleSelectFolder}
          selectedFolder={selectedFolder}
        />
        <FolderName selectedFolder={selectedFolder} />
        <FolderContentCard selectedFolder={selectedFolder} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 0 32.5px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  max-width: 112.5rem;
  gap: 4rem;
`;
