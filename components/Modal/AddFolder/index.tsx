import CloseModalButton from "../CloseModalButton";
import styles from "../index.module.css";

const AddFolder = () => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <CloseModalButton />
        <h1>폴더 추가</h1>
        <input placeholder="내용 입력" />
        <button>추가하기</button>
      </div>
    </div>
  );
};

export default AddFolder;
