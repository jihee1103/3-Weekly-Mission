import { useState } from "react";
import styles from "./FloatingButton.module.css";
import Modal from "../Modal/Modal";

function FloatingButton() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={styles.floatingBtn} onClick={() => setModal(true)}>
        <span className={styles.floatingText}>
          <span>폴더추가</span>
          <img src="/assets/add-icon-white.svg" alt="add" />
        </span>
      </div>
      <div className={styles.fixedBtn} onClick={() => setModal(true)}>
        <span className={styles.fixedText}>
          <span>폴더추가</span>
          <img src="/assets/add-icon.svg" alt="add" />
        </span>
      </div>

      {modal && (
        <Modal
          setModal={setModal}
          title="폴더 추가"
          isInput
          btnText="추가하기"
        />
      )}
    </>
  );
}

export default FloatingButton;
