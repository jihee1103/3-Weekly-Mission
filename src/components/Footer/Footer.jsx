import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerFrame}>
        <div className={styles.footerBar}>
          <div className={styles.footerLeft}>
            <span className={styles.footerLogo}>©codeit - 2023</span>
            <div className={styles.footerPolicy}>
              <a className={styles.footerText} href="/privacy">
                Privacy Policy
              </a>
              <a className={styles.footerText} href="/faq">
                FAQ
              </a>
            </div>
          </div>
          <div className={styles.footerRight}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.snsIcon}
                src="/assets/icon-facebook-fill.svg"
                alt="facebook"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.snsIcon}
                src="/assets/icon-twitter-fill.svg"
                alt="twitter"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.snsIcon}
                src="/assets/icon-youtube-fill.svg"
                alt="youtube"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.snsIcon}
                src="/assets/icon-instagram-fill.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
