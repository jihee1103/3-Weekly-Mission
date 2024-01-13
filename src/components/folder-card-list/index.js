import { useState, useEffect } from 'react';
import { getFolder, getFolderItem } from '../../api';
import CardList from '../card-list/index';
import FolderMenu from '../folder-menu';
import SelectedFolder from '../selected-folder';
import AddFolderBtn from '../add-folder-btn';

function FolderCardList() {
  const [link, setLink] = useState();
  const [folder, setFolder] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({
    name: '전체',
    id: 'all',
  });

  const handleClick = async (folderId, folderName) => {
    setSelectedFolder({ name: folderName, id: folderId });
    try {
      const data = await getFolderItem(folderId);
      setLink(data?.data);
    } catch (error) {
      console.error(`Error: ${error}`);
      setLink([]);
    }
  };

  useEffect(() => {
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
    <>
      <FolderMenu
        folder={folder}
        selectedFolder={selectedFolder}
        handleClick={handleClick}
      />
      <SelectedFolder selectedFolder={selectedFolder} />
      <CardList link={link} />
      <AddFolderBtn />
    </>
  );
}

export default FolderCardList;
