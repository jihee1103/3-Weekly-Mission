import { useEffect, useState } from "react";
import { fetchFolderData } from "../apis/api";
import "../styles/Header.css";

function Header() {
  const [folderData, setFolderData] = useState();

  //폴더 데이터 가져오기
  const handleLoadFolder = async () => {
    const response = await fetchFolderData();
    setFolderData(response);
  };

  //초기데이터 설정
  useEffect(() => {
    handleLoadFolder();
  }, []);

  return (
    <header>
      <div className="folder-info">
        <img
          className="folder-owner-profile"
          src={folderData.folder.owner.profileImageSource}
          alt="folder-owner-profile-img"
        />
        <span className="folder-owner-name">
          @{folderData.folder.owner.name}
        </span>
        <span className="folder-name">{folderData.folder.name}</span>
      </div>
    </header>
  );
}

export default Header;
