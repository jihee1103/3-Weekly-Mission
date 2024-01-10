import styled from 'styled-components';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import FolderContent from './FolderContent';
// import { API_FOLDERS, API_LINKS } from '../../constants/api';
import useFolderLinks from '../../Hooks/useFolderLinks';
import NoLinkCard from '../Card/NoLinkCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export default function FolderBody() {
  const [userId, setUserId] = useState(1);
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState('전체');

  const handleClickTitle = (item) => {
    setUserId(1); // test
    setFolderId(item.id);
    setFolderName(item.name);
  };

  const links = useFolderLinks(`users/${userId}/links`, folderId);
  const folderList = useFolderLinks(`users/${userId}/folders`);

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
        />
      )}
      {links.length === 0 && folderList.length !== 0 && <NoLinkCard />}
    </Wrapper>
  );
}
