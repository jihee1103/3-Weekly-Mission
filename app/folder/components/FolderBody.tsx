import styled from 'styled-components';
import NoLinkCard from '../../../app/components/card/NoLinkCard';
import SearchBar from '../../../app/components/search-bar/SearchBar';
import { FolderList, Links } from './Folder';
import FolderContent from './FolderContent';
import SearchResult from '../../../app/components/search-bar/SearchResult';

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
  updateSearchInputValue: (value: string) => void;
}

export default function FolderBody({
  toggleModal,
  updateModalName,
  links,
  folderList,
  folderId,
  folderName,
  handleClickTitle,
  handleClickDeleteLink,
  searchInputValue,
  updateSearchInputValue,
}: Props) {
  return (
    <Wrapper>
      <SearchBar
        searchInputValue={searchInputValue}
        updateSearchInputValue={updateSearchInputValue}
      />
      {searchInputValue ? (
        <SearchResult searchInputValue={searchInputValue} />
      ) : null}
      {links.length === 0 && folderList.length === 0 ? (
        <NoLinkCard />
      ) : (
        <FolderContent
          toggleModal={toggleModal}
          updateModalName={updateModalName}
          links={links}
          folderList={folderList}
          folderId={folderId}
          folderName={folderName}
          handleClickTitle={handleClickTitle}
          handleClickDeleteLink={handleClickDeleteLink}
          searchInputValue={searchInputValue}
        />
      )}
      {links.length === 0 && folderList.length !== 0 ? <NoLinkCard /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
