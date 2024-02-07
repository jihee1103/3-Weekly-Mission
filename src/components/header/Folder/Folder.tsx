import { useEffect, useState } from 'react';
import { getFolder } from '../../../api';
import './Folder.css';

interface FolderType {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  }[];
  count: number;
}

export default function Folder() {
  const [folder, setFolder] = useState<FolderType | null>(null);

  useEffect(() => {
    async function applyGetFolder() {
      const nextFolder = await getFolder();
      if (!nextFolder) return;
      setFolder(nextFolder.folder);
    }

    applyGetFolder();
  }, []);

  return (
    <div className="information">
      <div className="folder-info">
        <div className="user-info">
          <img
            className="owner-profile"
            src={folder?.owner.profileImageSource || '/images/logo.svg'}
            alt="소유자 프로필"
          />
          <span className="owner-name">
            {folder?.owner.name || 'anonymous'}
          </span>
        </div>
        <div id="folder-name">{folder?.name || 'Linkbrary'}</div>
      </div>
    </div>
  );
}
