import { useEffect, useState } from "react";
import { getFolderList } from "../../api/api";
import styles from "./FolderListArea.module.css";
import { useFolderNameContext } from "../../context/FolderNameContext";
import ModalAddFolder from "../Modal/ModalAddFolder";

interface Props {
  onFolderClick: (itemId: string) => void;
  onAllFolderClick: () => void;
}

const FolderListArea = ({ onFolderClick, onAllFolderClick }: Props) => {
  const [folderData, setFolderData] = useState<{
    data: { id: string; name: string }[];
  }>({ data: [] });
  const [showModalAddFolder, setShowModalAddFolder] = useState<boolean>(false);

  const handleShowModalAddFolder = () => {
    setShowModalAddFolder(!showModalAddFolder);
  };

  const handleFolderData = async () => {
    const folder = await getFolderList();
    setFolderData(folder);
  };

  const { setFolderNameValue, setFolderIdValue } = useFolderNameContext();

  const handleFolderName = (clickItemName: string) => {
    setFolderNameValue(clickItemName);
  };
  const handleFolderId = (clickItemId: string) => {
    setFolderIdValue(clickItemId);
  };

  useEffect(() => {
    handleFolderData();
  }, []);

  return (
    <div className={styles.folderListArea}>
      <div className={styles.folderList}>
        <p
          className={styles.folderItem}
          onClick={() => {
            handleFolderName("전체");
            onAllFolderClick();
          }}
        >
          전체
        </p>
        {folderData.data.map((item) => (
          <p
            className={styles.folderItem}
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
        className={styles.addFolderButton}
        src={`/assets/addBtn.png`}
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
