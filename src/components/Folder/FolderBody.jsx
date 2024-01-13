import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFolderLinks from '../../Hooks/useFolderLinks';
import NoLinkCard from '../Card/NoLinkCard';
import SearchBar from '../SearchBar/SearchBar';
import FolderContent from './FolderContent';
import Modal from '../Modal/Modal';

export default function FolderBody() {
  const [userId, setUserId] = useState(1);
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState('전체');
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [modalName, setModalName] = useState('');

  const updateModalName = (name) => {
    setModalName(name);
  };

  const toggleModalClick = () => {
    setIsModalClicked(!isModalClicked);
  };

  const handleClickTitle = (item) => {
    setUserId(1); // test
    setFolderId(item.id);
    setFolderName(item.name);
  };

  useEffect(() => {
    document.documentElement.style.scrollbarGutter = 'stable';

    if (isModalClicked) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalClicked]);

  const links = useFolderLinks(`users/${userId}/links`, folderId);
  const folderList = useFolderLinks(`users/${userId}/folders`);

  return (
    <Wrapper>
      {isModalClicked ? (
        <Modal toggleModalClick={toggleModalClick} modalName={modalName} />
      ) : null}
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
          toggleModalClick={toggleModalClick}
          updateModalName={updateModalName}
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
