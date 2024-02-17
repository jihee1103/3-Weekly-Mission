import Search from "./Search";
import Card from "./Card";
import styles from "./CardSection.module.css";

export default function CardSection() {
  return (
    <div className={styles.mainArea}>
      <div className={styles.mainBOX}>
        <Search />
        <div className={styles.linkImgBox}>
          <Card />
        </div>
      </div>
    </div>
  );
}
