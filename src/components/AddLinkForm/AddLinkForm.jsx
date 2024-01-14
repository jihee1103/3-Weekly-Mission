import styles from "./AddLinkForm.module.css";

function AddLinkForm() {
  return (
    <div className={styles.addLinkForm}>
      <div className={styles.wrapper}>
        <div className={styles.formBox}>
          <span className={styles.inputBox}>
            <img src="/assets/link-icon.svg" alt="link" />
            <input type="text" placeholder="링크를 추가해 보세요"></input>
          </span>
          <button>추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default AddLinkForm;
