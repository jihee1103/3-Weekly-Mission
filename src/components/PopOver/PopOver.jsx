import styles from "./PopOver.module.css";

function PopOver() {
  return (
    <>
      <div className={styles.popOver}>
        <div className={styles.deleteBtn}>삭제하기</div>
        <div className={styles.addBtn}>폴더에 추가</div>
      </div>
    </>
  );
}

export default PopOver;
