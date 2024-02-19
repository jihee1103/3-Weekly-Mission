import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer-bar")}>
        <div className={cx("footer-bar-content")}>
          <div className={cx("footer-bar-content-logo")}>
            <span>©codeit - 2023 </span>
          </div>
          <div className={cx("footer-bar-content-mid")}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className={cx("footer-bar-content-sns")}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/akar-icons_facebook-fill.png"
                alt="페이스북링크"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/akar-icons_twitter-fill.png" alt="트위터링크" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/akar-icons_youtube-fill.png" alt="유튜브링크" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/ant-design_instagram-filled.png"
                alt="인스타그램링크"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
