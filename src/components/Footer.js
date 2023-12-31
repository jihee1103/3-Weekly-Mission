import "./Footer.css";
import facebookIcon from "../assets/facebook_icon.svg";
import twitterIcon from"../assets/twitter_icon.svg";
import youtubeIcon from "../assets/youtube_icon.svg";
import instagramIcon from"../assets/instagram_icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="brand-year">ⓒcodeit - 2023</div>
      <div className="policy-and-faq">
        <a className="privacy" href="documents/privacy.html">
          Privacy Policy
        </a>
        <a className="faq" href="documents/faq.html">
          FAQ
        </a>
      </div>
      <div className="sns-link">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="facebook-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="twitter-icon" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="youtube-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="instagram-icon" />
        </a>
      </div>
    </footer>
  );
}
