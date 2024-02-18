import CloseModalButton from "../CloseModalButton";
import styles from "./index.module.css";

const AddLink = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <CloseModalButton />
        <h1>폴더에 추가</h1>
        <span>링크 주소</span>
        <div className={styles.wrapper}>
          <div>
            <h6>코딩팁</h6>
            <span>7개 링크</span>
          </div>
          <div>
            <h6>채용 사이트</h6>
            <span>3개 링크</span>
          </div>
          <div>
            <h6>유용한 글</h6>
            <span>12개 링크</span>
          </div>
          <div>
            <h6>나만의 장소</h6>
            <span>9개 링크</span>
          </div>
        </div>

        <button>추가하기</button>
      </div>
    </div>
  );
};

export default AddLink;
