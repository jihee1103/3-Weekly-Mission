import styles from "./FloatingButton.module.css";

function FloatingButton() {
  return (
    <>
      <div className={styles.floatingBtn}>
        <span className={styles.floatingText}>
          <span>폴더추가</span>
          <img src="/assets/add-icon-white.svg" alt="add" />
        </span>
      </div>
      <img className={styles.fixedIcon} src="/assets/add-icon.svg" alt="add" />
    </>
  );
}

export default FloatingButton;
