import './style.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span className="footer__codeit">©codeit - 2023</span>
        <div className="footer__link">
          <a href="incomplete/privacy-policy.html" target="_blank">
            Privacy Policy
          </a>
          <a href="incomplete/FAQ.html" target="_blank">
            FAQ
          </a>
        </div>
        <div className="footer__sns">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="/facebook-icon.svg" alt="페이스북 아이콘" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="/twitter-icon.svg" alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src="/youtube-icon.svg" alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/instagram-icon.svg" alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
