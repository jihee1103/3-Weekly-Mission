import CloseModalButton from "../CloseModalButton";
import styles from "../index.module.css";

const EditFolder = () => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <CloseModalButton />
        <h1>폴더 이름 변경</h1>
        <input placeholder="내용 입력" />
        <button>변경하기</button>
      </div>
    </div>
  );
};

export default EditFolder;
