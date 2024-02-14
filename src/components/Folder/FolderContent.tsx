import styled from 'styled-components';
import FolderCardHeader from './FolderCardHeader';
import FolderCardList from './FolderCardList';
import FolderTitleList from './FolderTitleList';
import { FolderList, Links } from './Folder';

export interface Props {
  toggleModal: () => void;
  updateModalName: (name: string) => void;
  links: Links[];
  folderList: FolderList[];
  folderId: number;
  folderName: string;
  handleClickTitle: (item: FolderList) => void;
  handleClickDeleteLink: (url: string) => void;
  searchInputValue: string;
}

export default function FolderContent({
  toggleModal,
  updateModalName,
  links,
  folderList,
  folderId,
  folderName,
  handleClickTitle,
  handleClickDeleteLink,
  searchInputValue,
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
          searchInputValue={searchInputValue}
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
