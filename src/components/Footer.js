import "./Footer.css";
export default Footer;

function Footer() {
  return (
    <footer>
      <div className="footer-bar">
        <div className="footer-bar-content">
          <div className="footer-bar-content-logo">
            <span>©codeit - 2023 </span>
          </div>
          <div className="footer-bar-content-mid">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footer-bar-content-sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/imgs/akar-icons_facebook-fill.png"
                alt="페이스북링크"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/akar-icons_twitter-fill.png" alt="트위터링크" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/akar-icons_youtube-fill.png" alt="유튜브링크" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/imgs/ant-design_instagram-filled.png"
                alt="인스타그램링크"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
