import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_item">
        <div class="footer_codeit">
          <span>©codeit - 2023</span>
        </div>
        <div className="footer_link">
          <a href="/privacy" target="_blank">
            Privacy Policy
          </a>
          <a href="/faq" target="_blank">
            FAQ
          </a>
        </div>
        <div className="footer_sns">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + `/assets/icons_facebook.png`}
              alt="페이스북 아이콘"
            />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + `/assets/icons_twitter.png`}
              alt="트위터 아이콘"
            />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + `/assets/icons_youtube.png`}
              alt="유튜브 아이콘"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + `/assets/icons_instagram.png`}
              alt="인스타그램 아이콘"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
