import "./Footer.css";
import facebookImg from "../images/facebook.svg";
import twitterImg from "../images/twitter.svg";
import youtubeImg from "../images/youtube.svg";
import instagramImg from "../images/instagram.svg";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div className="footer-left">@codeit - 2023</div>
          <div className="footer-center">
            <a href="./privacy/privacy.html">Privacy Policy</a>
            <a href="./faq/faq.html">FAQ</a>
          </div>
          <div className="footer-right">
            <a rel="noreferrer" href="http://faceboom.com" target={"_blank"}>
              <img src={facebookImg} alt="facebook" />
            </a>
            <a rel="noreferrer" href="https://twitter.com/?lang=ko" target="_blank">
              <img src={twitterImg} alt="twit" />
            </a>
            <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
              <img src={youtubeImg} alt="youTube" />
            </a>
            <a rel="noreferrer" href="https://www.instagram.com/" target="_blank">
              <img src={instagramImg} alt="insta" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
