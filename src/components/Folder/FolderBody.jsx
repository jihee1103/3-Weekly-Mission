import styled from 'styled-components';
import NoLinkCard from '../Card/NoLinkCard';
import SearchBar from '../SearchBar/SearchBar';
import FolderContent from './FolderContent';

export default function FolderBody({
  toggleModal,
  updateModalName,
  links,
  folderList,
  folderId,
  folderName,
  handleClickTitle,
  handleClickDeleteLink,
}) {
  return (
    <Wrapper>
      <SearchBar />
      {links.length === 0 && folderList.length === 0 ? (
        <NoLinkCard />
      ) : (
        <FolderContent
          folderList={folderList}
          links={links}
          folderId={folderId}
          onClick={handleClickTitle}
          folderName={folderName}
          toggleModal={toggleModal}
          updateModalName={updateModalName}
          handleClickDeleteLink={handleClickDeleteLink}
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
