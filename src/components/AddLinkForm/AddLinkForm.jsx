import { useState } from "react";
import { useFolderData } from "../../hooks/useFolderData";
import Modal from "../Modal/Modal";
import styles from "./AddLinkForm.module.css";

function AddLinkForm() {
  const [modal, setModal] = useState(false);
  const { folderData } = useFolderData(null);

  return (
    <>
      <div className={styles.addLinkForm}>
        <div className={styles.wrapper}>
          <div className={styles.formBox}>
            <span className={styles.inputBox}>
              <img src="/assets/link-icon.svg" alt="link" />
              <input type="text" placeholder="링크를 추가해 보세요"></input>
            </span>
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              추가하기
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <Modal
          setModal={setModal}
          title="폴더에 추가"
          subTitle="링크 주소"
          isAddLink="true"
          btnText="추가하기"
          folderData={folderData}
        />
      )}
    </>
  );
}

export default AddLinkForm;
