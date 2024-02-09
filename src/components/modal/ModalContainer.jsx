import { useRef } from "react";
import styles from "./ModalContainer.module.css";
import EditFolderModal from "./modalType/editFolderModal/EditFolderModal";
import EditLinkModal from "./modalType/editLinkModal/EditLinkModal";

function ModalContainer({ modalType, onModalCloseClick }) {
  const modal = {
    ADD_FOLDER: (
      <EditFolderModal.AddFolder onModalCloseClick={onModalCloseClick} />
    ),
    DELETE_FOLDER: (
      <EditFolderModal.DeleteFolder onModalCloseClick={onModalCloseClick} />
    ),
    EDIT_FOLDER_NAME: (
      <EditFolderModal.EditFolderName onModalCloseClick={onModalCloseClick} />
    ),
    SHARE_FOLDER: (
      <EditFolderModal.ShareFolder onModalCloseClick={onModalCloseClick} />
    ),
    ADD_LINK: <EditLinkModal.AddLink onModalCloseClick={onModalCloseClick} />,
    DELETE_LINK: (
      <EditLinkModal.DeleteLink onModalCloseClick={onModalCloseClick} />
    ),
  };

  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onModalCloseClick();
    }
  };

  return (
    <div className={styles.modalContainer} onClick={handleClickOutside}>
      <div className={styles.window} ref={modalRef}>
        {modal[modalType]}
      </div>
    </div>
  );
}

export default ModalContainer;
