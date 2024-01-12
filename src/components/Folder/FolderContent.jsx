import styled from 'styled-components';
import FolderCardHeader from './FolderCardHeader';
import FolderCardList from './FolderCardList';
import FolderTitleList from './FolderTitleList';

export default function FolderContent({
  folderList,
  links,
  folderId,
  onClick,
  folderName,
  toggleModalClick,
  updateModalName,
}) {
  return (
    <>
      <FolderTitleList
        folderList={folderList}
        folderId={folderId}
        onClick={onClick}
        toggleModalClick={toggleModalClick}
        updateModalName={updateModalName}
      />
      <FolderCardArea>
        <FolderCardHeader
          folderName={folderName}
          folderId={folderId}
          toggleModalClick={toggleModalClick}
          updateModalName={updateModalName}
        />
        <FolderCardList links={links} />
      </FolderCardArea>
    </>
  );
}

const FolderCardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
