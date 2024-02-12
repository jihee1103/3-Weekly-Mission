import { useState, useEffect } from 'react';
import { getFolder, getFolderItem } from '../../api/api';
import { CardList } from '../CardList/index';
import { FolderMenu } from '../FolderMenu';
import { FolderManagementMenu } from '../FolderManagementMenu';
import { AddFolderFloatingButton } from '../AddFolderButton/FloatingButton/index';
import * as S from './style';

export const FolderCardList = () => {
  const [link, setLink] = useState();
  const [folder, setFolder] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({
    name: '전체',
    id: 'all',
  });

  const handleClick = async (folderId, folderName) => {
    setSelectedFolder({ id: folderId, name: folderName });
    try {
      const data = await getFolderItem(folderId);
      setLink(data?.data);
    } catch (error) {
      console.error(`Error: ${error}`);
      setLink([]);
    }
  };

  useEffect(() => {
    console.log(selectedFolder);

    const folderData = async () => {
      const data = await getFolder();
      setFolder(data?.data);
    };

    const folderItemData = async () => {
      const data = await getFolderItem(selectedFolder.id);
      setLink(data?.data);
    };

    folderData();
    folderItemData();
    return;
  }, []);

  return (
    <S.FolderCardList>
      <FolderMenu
        folder={folder}
        selectedFolder={selectedFolder}
        handleClick={handleClick}
      />
      <FolderManagementMenu selectedFolder={selectedFolder} />
      <CardList link={link} />
      <AddFolderFloatingButton />
    </S.FolderCardList>
  );
};
