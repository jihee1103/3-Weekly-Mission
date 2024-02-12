import { useEffect, useState } from "react";
import getFoldersUser1Data from "../../api/getFoldersUser1Data";
import styled from "styled-components";

const FolderNameButton = () => {
  const [foldersUser1Data, setFoldersUser1Data] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFoldersUser1Data();
      setFoldersUser1Data(data.data);
    };
    fetchData();
  });

  return (
    <FolderButtonWrapper>
      {foldersUser1Data.map((folder) => (
        <FoldersNameButton key={folder.id}>{folder.name}</FoldersNameButton>
      ))}
    </FolderButtonWrapper>
  );
};
export default FolderNameButton;

const FolderButtonWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const FoldersNameButton = styled.button`
  display: flex;
  padding: 12px 12px;
  height: 35px;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background-color: var(--Linkbrary-white, #fff);

  &:hover {
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-gray10, #e7effb);
    cursor: pointer;
  }
  &:focus {
    color: white;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-primary-color, #6d6afe);
    cursor: pointer;
  }
`;
