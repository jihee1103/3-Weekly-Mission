import Container from "./Container";
import styles from "./Footer.module.css";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.info}>@codeit - 2023</div>
        <div className={styles.links}>
          <a className="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div className={styles.sns}>
          <a target="_blank" href="https://www.facebook.com/">
            <img src={facebook} alt="페이스북 아이콘" />
          </a>
          <a target="_blank" href="https://twitter.com/">
            <img src={twitter} alt="트위터 아이콘" />
          </a>
          <a target="_blank" href="https://www.youtube.com/">
            <img src={youtube} alt="유튜브 아이콘" />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <img src={instagram} alt="인스타그램 아이콘" />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
