import "./EditButtonsArea.css";
import { useFolderNameContext } from "../../context/FolderNameContext";
import { useState } from "react";
import ModalEditFolderName from "../Modal/ModalEditFolderName";

const EditButtonsArea = () => {
  const { folderName } = useFolderNameContext();
  const [showModalEditFolderName, setShowModalEditFolderName] = useState(false);

  const handleModalEditFolderName = () => {
    setShowModalEditFolderName(!showModalEditFolderName);
  };

  if (folderName !== "전체") {
    return (
      <div className="editButtonsArea">
        <div className="editButton">
          <img
            className="editButtonIcon"
            src={process.env.PUBLIC_URL + `/assets/share.png`}
            alt="공유 버튼"
          />
          <p className="editButtonName">공유</p>
        </div>
        <div className="editButton" onClick={handleModalEditFolderName}>
          <img
            className="editButtonIcon"
            src={process.env.PUBLIC_URL + `/assets/pen.png`}
            alt="이름 변경 버튼"
          />
          <p className="editButtonName">이름 변경</p>
        </div>
        <div className="editButton">
          <img
            className="editButtonIcon"
            src={process.env.PUBLIC_URL + `/assets/delete.png`}
            alt="삭제 버튼"
          />
          <p className="editButtonName">삭제</p>
        </div>
        {showModalEditFolderName && (
          <ModalEditFolderName handleClose={handleModalEditFolderName} />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default EditButtonsArea;
