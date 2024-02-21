import CloseModalButton from "../CloseModalButton";
import styles from "../index.module.css";

const DeleteFolder = () => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <CloseModalButton />
        <h1>폴더 삭제</h1>
        <span>폴더명</span>
        <button className={styles.deleteButton}>삭제하기</button>
      </div>
    </div>
  );
};

export default DeleteFolder;
