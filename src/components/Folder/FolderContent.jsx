import styled from 'styled-components';
import FolderCardHeader from './FolderCardHeader';
import FolderCardList from './FolderCardList';
import FolderTitleList from './FolderTitleList';

const FolderCardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export default function FolderContent({
  folderList,
  links,
  folderId,
  onClick,
  folderName,
  toggleModalClick,
}) {
  return (
    <>
      <FolderTitleList
        folderList={folderList}
        folderId={folderId}
        onClick={onClick}
        toggleModalClick={toggleModalClick}
      />
      <FolderCardArea>
        <FolderCardHeader folderName={folderName} folderId={folderId} />
        <FolderCardList links={links} />
      </FolderCardArea>
    </>
  );
}
