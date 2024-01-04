import "./Folder.css";
import { useEffect, useState } from "react";
import { getFolderData } from "../api/api";

const Folder = () => {
  const [folderInfo, setFolderInfo] = useState({ folder: { owner: {} } });
  const handleFolderData = async () => {
    const folder = await getFolderData();
    setFolderInfo(folder);
  };
  useEffect(() => {
    handleFolderData();
  }, []);
  return (
    <div className="folder">
      <img
        className="userProfile"
        src={folderInfo.folder.owner.profileImageSource}
        alt="폴더 프로필 이미지"
      />
      <h2 className="userName">@{folderInfo.folder.owner.name}</h2>
      <h2 className="folderName">{folderInfo.folder.name}</h2>
    </div>
  );
};

export default Folder;
