const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-font footer-codeit">©codeit - 2023</div>
        <div className="footer-privacy-policy-and-faq">
          <a href="/privacy" className="footer-font footer-privacy-policy">
            Privacy Policy
          </a>
          <a href="/faq" className="footer-font footer-faq">
            FAQ
          </a>
        </div>
        <div className="footer-font footer-link">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/facebook_icon.svg`} alt="페이스북 링크 아이콘" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/twitter_icon.svg`} alt="트위터 링크 아이콘" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/youtube_icon.svg`} alt="유튜브 링크 아이콘" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/instagram_icon.svg`} alt="인스타그램 링크아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
