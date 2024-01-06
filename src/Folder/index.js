import { getFolderData } from '../api/api';
import './style.css';
import { useState, useEffect } from 'react';

function Folder() {
  const [folder, setFolder] = useState();

  const folderData = async () => {
    const data = await getFolderData();
    setFolder(data['folder']);
  };

  useEffect(() => {
    folderData();
  }, []);

  return (
    <div className="folder">
      <div className="folder-container">
        <img
          className="owner-image"
          src={folder?.owner.profileImageSource}
          width="60"
        />
        <p className="owner-name">{folder?.owner.name}</p>
        <p className="folder-name">{folder?.name}</p>
      </div>
    </div>
  );
}

export default Folder;
