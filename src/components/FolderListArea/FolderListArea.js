import { useEffect, useState } from "react";
import { getFolderList } from "../../api/api";
import FolderList from "../FolderList/FolderList";
import "./FolderListArea.css";

const FolderListArea = () => {
  const [folderData, setFolderData] = useState({ data: [] });

  const handleFolderData = async () => {
    const folder = await getFolderList();
    setFolderData(folder);
  };

  useEffect(() => {
    handleFolderData();
  }, []);

  return (
    <div className="folderListArea">
      <FolderList folderList={folderData.data} />
      <img
        className="addFolderButton"
        src={process.env.PUBLIC_URL + `/assets/addBtn.png`}
        alt="폴더 추가 버튼"
      />
    </div>
  );
};

export default FolderListArea;
