import styles from "./EmptyArea.module.css";
const EmptyArea = () => {
  return (
    <div className={styles.emptyArea}>
      <p className={styles.emptyMessage}>저장된 링크가 없습니다</p>
    </div>
  );
};

export default EmptyArea;
