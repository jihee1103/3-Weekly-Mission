import CloseModalButton from "../CloseModalButton";
import styles from "../index.module.css";

const DeleteLink = () => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <CloseModalButton />
        <h1>링크 삭제</h1>
        <span>http://www.naver.com</span>
        <button className={styles.deleteButton}>삭제하기</button>
      </div>
    </div>
  );
};

export default DeleteLink;
