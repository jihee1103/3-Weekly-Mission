import "./Footer.css";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        <span>©codeit - 2023</span>
      </div>
      <div className="footer-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="faq.html">FAQ</a>
      </div>
      <div className="footer-sns">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook 로고" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="twitter 로고" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={youtube} alt="youtube 로고" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="instagram 로고" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
