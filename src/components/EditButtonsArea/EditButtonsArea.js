import styles from "./EditButtonsArea.module.css";
import { useFolderNameContext } from "../../context/FolderNameContext";
import { useState } from "react";
import ModalEditFolderName from "../Modal/ModalEditFolderName";
import ModalDeleteFolder from "../Modal/ModalDeleteFolder";
import ModalShareFolder from "../Modal/ModalShareFolder";

const EditButtonsArea = () => {
  const { folderName } = useFolderNameContext();
  const [showModalEditFolderName, setShowModalEditFolderName] = useState(false);
  const [showModalDeleteFolder, setShowModalDeleteFolder] = useState(false);
  const [showModalShareFolder, setShowModalShareFolder] = useState(false);

  const handleModalEditFolderName = () => {
    setShowModalEditFolderName(!showModalEditFolderName);
  };

  const handleModalDeleteFolder = () => {
    setShowModalDeleteFolder(!showModalDeleteFolder);
  };

  const handleModalShareFolder = () => {
    setShowModalShareFolder(!showModalShareFolder);
  };
  if (folderName !== "전체") {
    return (
      <div className={styles.editButtonsArea}>
        <div className={styles.editButton} onClick={handleModalShareFolder}>
          <img
            className={styles.editButtonIcon}
            src={`/assets/share.png`}
            alt="공유 버튼"
          />
          <p className={styles.editButtonName}>공유</p>
        </div>
        <div className={styles.editButton} onClick={handleModalEditFolderName}>
          <img
            className={styles.editButtonIcon}
            src={`/assets/pen.png`}
            alt="이름 변경 버튼"
          />
          <p className={styles.editButtonName}>이름 변경</p>
        </div>
        <div className={styles.editButton} onClick={handleModalDeleteFolder}>
          <img
            className={styles.editButtonIcon}
            src={`/assets/delete.png`}
            alt="삭제 버튼"
          />
          <p className={styles.editButtonName}>삭제</p>
        </div>
        {showModalEditFolderName && (
          <ModalEditFolderName handleClose={handleModalEditFolderName} />
        )}
        {showModalDeleteFolder && (
          <ModalDeleteFolder handleClose={handleModalDeleteFolder} />
        )}
        {showModalShareFolder && (
          <ModalShareFolder handleClose={handleModalShareFolder} />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default EditButtonsArea;
