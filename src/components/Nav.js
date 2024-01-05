import Container from "./Container";
import styles from "./Nav.module.css";
import logoImg from "../assets/logo.svg";
import UserMenu from "./UserMenu";
function Nav({ userProfile }) {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <div>
          <a href="/">
            <img src={logoImg} alt="홈 버튼" />
          </a>
        </div>
        {userProfile ? (
          <UserMenu userProfile={userProfile} />
        ) : (
          <div className={styles.button}>로그인</div>
        )}
      </Container>
    </div>
  );
}

export default Nav;
