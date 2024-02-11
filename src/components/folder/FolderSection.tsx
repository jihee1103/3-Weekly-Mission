import { useEffect, useState } from "react";
import LinkSearchInput from "./LinkSearchInput";
import FolderList from "./FolderList";
import FolderName from "./FolderName";
import FolderContentCard from "./FolderContentCard";
import styled from "styled-components";
import { UserFolder, UserLink, getUserLinks } from "../../api";
import { AllSee } from "../../types";

export default function FolderSection() {
  const allSee: AllSee = {
    id: undefined,
    name: "전체",
  };
  const [selectedFolder, setSelectedFolder] = useState<UserFolder | AllSee>(
    allSee
  );
  const [items, setItems] = useState<UserLink[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  useEffect(() => {
    async function handleload() {
      const { id } = selectedFolder;
      if (searchTerm) {
        const response = await getUserLinks(4, id);
        const filteredLinks = response.filter(
          (link) =>
            (link.url && link.url.includes(searchTerm)) ||
            (link.title && link.title.includes(searchTerm)) ||
            (link.description && link.description.includes(searchTerm))
        );
        setItems(filteredLinks);
      } else {
        setItems(await getUserLinks(4, id));
      }
    }
    handleload();
  }, [selectedFolder, searchTerm]);
  const handleSelectFolder = (folder: UserFolder | AllSee) => {
    setSelectedFolder(folder);
  };
  return (
    <Section>
      <LinkSearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="foder-contents">
        <FolderList
          onSelectFolder={handleSelectFolder}
          selectedFolder={selectedFolder}
        />
        <FolderName selectedFolder={selectedFolder} />
        <FolderContentCard items={items} />
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
