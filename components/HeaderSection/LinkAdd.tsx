import styles from "./LinkAdd.module.css";

export default function LinkAdd() {

  return (
    <div className={styles.link_Add_Area}>
      <form className={styles.link_Add_Box}>
        <input type="text" placeholder="링크를 추가해 보세요" />
        <img className={styles.link_svg} src="/image/link.svg" alt="link" />
        <button className={styles.link_Add_Button}>
          추가하기
        </button>
      </form>
    </div>
  );
}
