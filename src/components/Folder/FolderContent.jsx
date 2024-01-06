import styled from 'styled-components';
import FolderTitleList from './FolderTitleList';
import FolderCardHeader from './FolderCardHeader';
import FolderCardList from './FolderCardList';

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
}) {
  return (
    <>
      <FolderTitleList
        folderList={folderList}
        folderId={folderId}
        onClick={onClick}
      />
      <FolderCardArea>
        <FolderCardHeader />
        <FolderCardList links={links} />
      </FolderCardArea>
    </>
  );
}
