import { useUserData } from "../../hooks/useUserData";
import styles from "./Navbar.module.css";

function Account() {
  const { userData } = useUserData();

  return (
    <>
      {userData ? (
        <div className={styles.accountFrame}>
          <img
            className={styles.profile}
            src={userData?.image_source}
            alt="profile-img"
          />
          <span className={styles.email}>{userData?.email}</span>
        </div>
      ) : (
        <a className={styles.login} href="/signin">
          로그인
        </a>
      )}
    </>
  );
}
interface Props {
  isSticky?: boolean;
}
function Navbar({ isSticky }: Props) {
  return (
    <nav className={`${styles.nav} ${isSticky ? styles.folder : ""}`}>
      <div className={styles.gnb}>
        <a href="/">
          <img
            className={styles.logo}
            src="/assets/logo.svg"
            alt="linkbrary-logo"
          />
        </a>
        <Account />
      </div>
    </nav>
  );
}

export default Navbar;
