import instagram from './images/instagram-icon.svg';
import facebook from './images/facebook-icon.svg';
import twitter from './images/twitter-icon.svg';
import youtube from './images/youtube-icon.svg';
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
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="페이스북 아이콘" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
