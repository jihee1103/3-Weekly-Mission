import { useEffect, useState } from "react";
import "../css/FolderInfo.css";

export default function FolderInfo() {
  const [avatar, setAvatar] = useState(null);
  const [owner, setOwner] = useState("");
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    const getFolderInfo = async () => {
      try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
        if (response.status === 200) {
          const folderInfo = await response.json();
          setAvatar(folderInfo.folder.owner.profileImageSource);
          setOwner(folderInfo.folder.owner.name);
          setFolderName(folderInfo.folder.name);
        } else throw new Error("fetch error");
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
          <img
            src={avatar}
            alt="avatar"
            className="avatar"
          />
          <span className="folder-owner-name">{owner}</span>
        </div>
        <div className="folder-name">{folderName}</div>
      </div>
    </div>
  );
}
