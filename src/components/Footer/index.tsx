import "./style.css";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="copyright">©codeit - 2023</div>
        <div className="footer-links">
          <span className="footer-link">
            <a href="/">Privacy Policy</a>
          </span>
          <span className="footer-link">
            <a href="/">FAQ</a>
          </span>
        </div>
        <div className="sns">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img alt="facefook" src={facebook} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img alt="twitter" src={twitter} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img alt="youtube" src={youtube} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img alt="instagram" src={instagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
