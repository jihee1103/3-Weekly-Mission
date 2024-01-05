import { useState, useEffect } from "react";
import useAsync from "../../hooks/useAsync";
import { getFolderData } from "../../apis/api";
// import { useFolderData } from "../../hooks/useFolderData";
import "./Header.css";

function Header() {
  const [folderData, setFolderData] = useState(null);
  const [isLoading, loadingError, getFolderAsync] = useAsync(getFolderData);

  //초기데이터 설정
  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      const result = await getFolderAsync();
      if (!result) return;

      setFolderData(result);
    };

    handleLoadFolder();
  }, []);

  return (
    <header>
      <div className="folder-info">
        <img
          className="folder-owner-profile"
          src={folderData?.folder?.owner?.profileImageSource}
          alt="folder-owner-profile-img"
        />
        <span className="folder-owner-name">
          @{folderData?.folder?.owner?.name}
        </span>
        <span className="folder-name">{folderData?.folder?.name}</span>
        {loadingError?.message && <span>{loadingError.message}</span>}
      </div>
    </header>
  );
}

export default Header;
