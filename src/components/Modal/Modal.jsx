import SelectFolderBox from "./SelectFolderBox";
import ShareIconBox from "./ShareIconBox";
import styles from "./Modal.module.css";

function Modal({
  setModal,
  title,
  subTitle,
  isShare,
  isInput,
  isAddLink,
  btnText,
  btnColor,
  folderData,
}) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <img
          className={styles.closeBtn}
          src="/assets/close-icon.svg"
          alt="close"
          onClick={() => setModal(false)}
        />
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        {isInput && <input className={styles.input} placeholder="내용 입력" />}
        {isAddLink && <SelectFolderBox folderData={folderData} />}
        {isShare ? (
          <ShareIconBox />
        ) : (
          <button
            className={btnColor === "red" ? styles.deleteBtn : styles.submitBtn}
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;
