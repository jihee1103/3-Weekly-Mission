import styled from 'styled-components';
import FolderCardHeader from './FolderCardHeader';
import FolderCardList from './FolderCardList';
import FolderTitleList from './FolderTitleList';
import { Props } from './FolderBody';

export default function FolderContent({
  toggleModal,
  updateModalName,
  links,
  folderList,
  folderId,
  folderName,
  handleClickTitle,
  handleClickDeleteLink,
}: Props) {
  return (
    <>
      <FolderTitleList
        toggleModal={toggleModal}
        updateModalName={updateModalName}
        folderList={folderList}
        folderId={folderId}
        handleClickTitle={handleClickTitle}
      />
      <FolderCardArea>
        <FolderCardHeader
          folderName={folderName}
          folderId={folderId}
          toggleModal={toggleModal}
          updateModalName={updateModalName}
        />
        <FolderCardList
          links={links}
          toggleModal={toggleModal}
          updateModalName={updateModalName}
          handleClickDeleteLink={handleClickDeleteLink}
        />
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
