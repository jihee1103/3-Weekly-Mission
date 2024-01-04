import { useEffect, useState } from 'react';
import './FolderInfo.css';
import getFetchRequest from '../../utils/getFetchRequest';
import { API_FOLDER, BASE_API_HOST } from '../../constants/api';

export default function FolderInfo() {
  const [avatar, setAvatar] = useState(null);
  const [owner, setOwner] = useState('');
  const [folderName, setFolderName] = useState('');

  useEffect(() => {
    const getFolderInfo = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setAvatar(result.folder.owner.profileImageSource);
        setOwner(result.folder.owner.name);
        setFolderName(result.folder.name);
      } catch (error) {
        console.log(error);
      }
    };
    getFolderInfo();
  }, []);

  return (
    <div className="folderinfo-container">
      <div className="folderinfo-box">
        <div className="folder-owner">
          <img src={avatar} alt="avatar" className="avatar" />
          <span className="folder-owner-name">{owner}</span>
        </div>
        <div className="folder-name">{folderName}</div>
      </div>
    </div>
  );
}
