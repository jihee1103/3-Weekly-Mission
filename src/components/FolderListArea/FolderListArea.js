import { useEffect, useState } from "react";
import { getFolderList } from "../../api/api";
import "./FolderListArea.css";
import { useFolderNameContext } from "../../context/FolderNameContext";
import ModalAddFolder from "../Modal/ModalAddFolder";

const FolderListArea = ({ onFolderClick, onAllFolderClick }) => {
  const [folderData, setFolderData] = useState({ data: [] });
  const [showModalAddFolder, setShowModalAddFolder] = useState(false);

  const handleShowModalAddFolder = () => {
    setShowModalAddFolder(!showModalAddFolder);
  };

  const handleFolderData = async () => {
    const folder = await getFolderList();
    setFolderData(folder);
  };

  const { setFolderNameValue, setFolderIdValue } = useFolderNameContext();

  const handleFolderName = (clickItemName) => {
    setFolderNameValue(clickItemName);
  };
  const handleFolderId = (clickItemId) => {
    setFolderIdValue(clickItemId);
  };

  useEffect(() => {
    handleFolderData();
  }, []);

  return (
    <div className="folderListArea">
      <div className="folderList">
        <p
          className="folderItem"
          onClick={() => {
            handleFolderName("전체");
            onAllFolderClick();
          }}
        >
          전체
        </p>
        {folderData.data.map((item) => (
          <p
            className="folderItem"
            onClick={() => {
              onFolderClick(item.id);
              handleFolderName(item.name);
              handleFolderId(item.id);
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
      <img
        className="addFolderButton"
        src={process.env.PUBLIC_URL + `/assets/addBtn.png`}
        alt="추가 버튼"
        onClick={handleShowModalAddFolder}
      />
      {showModalAddFolder && (
        <ModalAddFolder handleClose={handleShowModalAddFolder} />
      )}
    </div>
  );
};

export default FolderListArea;
