import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddLink from '../AddLink/AddLink';
import FolderBody from './FolderBody';
import useFolderLinks from '../../Hooks/useFolderLinks';
import Modal from '../Modal/Modal';

export interface Links {
  createdAt: string;
  description: string;
  folderId: number;
  id: number;
  imageSource: string;
  title: string;
  updatedAt: string | null;
  url: string;
}
interface LinkCount {
  count: number;
}
export interface FolderList {
  createdAt?: string;
  favorite?: boolean;
  id: number;
  link?: LinkCount;
  name: string;
  userId?: number;
}

export default function Folder() {
  const [addLinkUrl, setAddLinkUrl] = useState('');
  const [selectedLinkUrl, setSelectedLinkUrl] = useState('');
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [modalName, setModalName] = useState('');
  const [userId, setUserId] = useState(4);
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState('전체');
  const [searchInputValue, setSearchInputValue] = useState('');

  const links: Links[] = useFolderLinks(`users/${userId}/links`, folderId);
  const folderList: FolderList[] = useFolderLinks(`users/${userId}/folders`);

  const updateSearchInputValue = (value: string) => {
    setSearchInputValue(value);
  };

  const handleClickDeleteLink = (url: string) => {
    setSelectedLinkUrl(url);
  };

  const resetSelectedLinkUrl = () => {
    setSelectedLinkUrl('');
  };

  const updateAddLinkUrl = (url: string) => {
    setAddLinkUrl(url);
  };

  const handleClickTitle = (item: FolderList) => {
    setUserId(4); // test
    setFolderId(item.id);
    setFolderName(item.name);
  };

  const updateModalName = (name: string) => {
    setModalName(name);
  };

  const toggleModal = () => {
    setIsModalClicked((prev) => !prev);
  };

  useEffect(() => {
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
          toggleModal={toggleModal}
          modalName={modalName}
          folderList={folderList}
          addLinkUrl={addLinkUrl}
          folderName={folderName}
          selectedLinkUrl={selectedLinkUrl}
          userId={userId}
          folderId={folderId}
          links={links}
        />
      ) : null}
      <AddLinkArea>
        <AddLink
          toggleModal={toggleModal}
          updateModalName={updateModalName}
          updateAddLinkUrl={updateAddLinkUrl}
          addLinkUrl={addLinkUrl}
          resetSelectedLinkUrl={resetSelectedLinkUrl}
        />
      </AddLinkArea>
      <FolderBodyArea>
        <FolderBody
          toggleModal={toggleModal}
          updateModalName={updateModalName}
          links={links}
          folderList={folderList}
          folderId={folderId}
          folderName={folderName}
          handleClickTitle={handleClickTitle}
          handleClickDeleteLink={handleClickDeleteLink}
          searchInputValue={searchInputValue}
          updateSearchInputValue={updateSearchInputValue}
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
