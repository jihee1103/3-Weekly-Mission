import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddLink from '../AddLink/AddLink';
import FolderBody from './FolderBody';
import useFolderLinks from '../../Hooks/useFolderLinks';
import Modal from '../Modal/Modal';

export default function Folder() {
  const [addLinkUrl, setAddLinkUrl] = useState('');
  const [selectedLinkUrl, setSelectedLinkUrl] = useState('');
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [modalName, setModalName] = useState('');
  const [userId, setUserId] = useState(1);
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState('전체');

  const links = useFolderLinks(`users/${userId}/links`, folderId);
  const folderList = useFolderLinks(`users/${userId}/folders`);

  const handleClickDeleteLink = (url) => {
    setSelectedLinkUrl(url);
  };

  const resetSelectedLinkUrl = () => {
    setSelectedLinkUrl('');
  };

  const updateAddLinkUrl = (url) => {
    setAddLinkUrl(url);
  };

  const handleClickTitle = (item) => {
    setUserId(1); // test
    setFolderId(item.id);
    setFolderName(item.name);
  };

  const updateModalName = (name) => {
    setModalName(name);
  };

  const toggleModalClick = () => {
    setIsModalClicked(!isModalClicked);
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

  return (
    <>
      {isModalClicked ? (
        <Modal
          toggleModalClick={toggleModalClick}
          modalName={modalName}
          folderList={folderList}
          addLinkUrl={addLinkUrl}
          folderName={folderName}
          selectedLinkUrl={selectedLinkUrl}
          userId={userId}
          folderId={folderId}
        />
      ) : null}
      <AddLinkArea>
        <AddLink
          toggleModalClick={toggleModalClick}
          updateModalName={updateModalName}
          folderList={folderList}
          updateAddLinkUrl={updateAddLinkUrl}
          addLinkUrl={addLinkUrl}
          resetSelectedLinkUrl={resetSelectedLinkUrl}
        />
      </AddLinkArea>
      <FolderBodyArea>
        <FolderBody
          isModalClicked={isModalClicked}
          toggleModalClick={toggleModalClick}
          modalName={modalName}
          updateModalName={updateModalName}
          setUserId={setUserId}
          setFolderId={setFolderId}
          links={links}
          folderList={folderList}
          folderId={folderId}
          folderName={folderName}
          handleClickTitle={handleClickTitle}
          handleClickDeleteLink={handleClickDeleteLink}
        />
      </FolderBodyArea>
    </>
  );
}

const AddLinkArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f6ff;
  padding: 60px 0 90px;
  @media (max-width: 767px) {
    & {
      padding: 24px 32px 40px;
    }
  }
`;
const FolderBodyArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
  @media (max-width: 767px) {
    & {
      padding: 20px 0;
    }
  }
`;
