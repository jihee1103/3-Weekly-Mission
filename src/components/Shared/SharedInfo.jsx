import { useEffect, useState } from 'react';
import './SharedInfo.css';
import getFetchRequest from '../../utils/getFetchRequest';
import { API_FOLDER, BASE_API_HOST } from '../../constants/api';

export default function SharedInfo() {
  const [avatar, setAvatar] = useState(null);
  const [owner, setOwner] = useState('');
  const [folderName, setFolderName] = useState('');

  useEffect(() => {
    const getSharedInfo = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
        setAvatar(result.folder.owner.profileImageSource);
        setOwner(result.folder.owner.name);
        setFolderName(result.folder.name);
      } catch (error) {
        console.log(error);
      }
    };
    getSharedInfo();
  }, []);

  return (
    <div className="shared-info-container">
      <div className="shared-info-box">
        <div className="shared-owner">
          <img src={avatar} alt="avatar" className="avatar" />
          <span className="shared-owner-name">{owner}</span>
        </div>
        <div className="shared-name">{folderName}</div>
      </div>
    </div>
  );
}
