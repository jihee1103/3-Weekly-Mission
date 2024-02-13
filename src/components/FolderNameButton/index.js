import { useContext } from "react";
import styled from "styled-components";
import { FolderStateContext } from "../../page/FolderPage";

const FolderNameButton = () => {
  const { foldersNameData, handleClickFilterFolder } =
    useContext(FolderStateContext);

  return (
    <FolderButtonWrapper>
      {foldersNameData.map((folder) => (
        <FoldersNameButton
          key={folder.id}
          onClick={() => {
            handleClickFilterFolder(folder.name);
          }}
        >
          {folder.name}
        </FoldersNameButton>
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
