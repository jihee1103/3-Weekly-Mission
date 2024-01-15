import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./CardList.module.css";

function OptionBox({ selectedFolderName }) {
  const [shareModal, setShareModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <span className={styles.options}>
        <span
          className={styles.option}
          onClick={() => {
            setShareModal(true);
          }}
        >
          <img src="/assets/share-icon.svg" alt="share" />
          <span>공유</span>
        </span>
        <span className={styles.option} onClick={() => setEditModal(true)}>
          <img src="/assets/pen-icon.svg" alt="pen" />
          <span>이름 변경</span>
        </span>
        <span className={styles.option} onClick={() => setDeleteModal(true)}>
          <img src="/assets/bin-icon.svg" alt="bin" />
          <span>삭제</span>
        </span>
      </span>

      {shareModal && (
        <Modal
          setModal={setShareModal}
          title="폴더 공유"
          subTitle={selectedFolderName}
          isShare="true"
        />
      )}
      {editModal && (
        <Modal
          setModal={setEditModal}
          title="폴더 이름 변경"
          btnText="변경하기"
          isInput="true"
        />
      )}
      {deleteModal && (
        <Modal
          setModal={setDeleteModal}
          title="폴더 삭제"
          subTitle={selectedFolderName}
          btnText="삭제하기"
          btnColor="red"
        />
      )}
    </>
  );
}

export default OptionBox;
