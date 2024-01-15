import styles from "./ShareIconBox.module.css";

function ShareIconBox() {
  return (
    <div className={styles.iconBox}>
      <span className={styles.icon}>
        <span className={styles.kakaoIcon}>
          <img src="/assets/icon-kakao-fill.svg" alt="kakao" />
        </span>
        <span className={styles.iconText}>카카오톡</span>
      </span>
      <span className={styles.icon}>
        <span className={styles.facebookIcon}>
          <img src="/assets/icon-facebook-fill.svg" alt="facebook" />
        </span>
        <span className={styles.iconText}>페이스북</span>
      </span>
      <span className={styles.icon}>
        <span className={styles.linkIcon}>
          <img src="/assets/link-icon.svg" alt="share" />
        </span>
        <span className={styles.iconText}>링크 복사</span>
      </span>
    </div>
  );
}

export default ShareIconBox;
