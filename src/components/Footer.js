import React from "react";
import facebookIcon from "../assets/icon-facebook-fill.svg";
import twitterIcon from "../assets/icon-twitter-fill.svg";
import youtubeIcon from "../assets/icon-youtube-fill.svg";
import instagramIcon from "../assets/icon-instagram-fill.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-frame">
        <div className="footer-bar">
          <div className="footer-left">
            <span className="footer-logo">©codeit - 2023</span>
            <div className="footer-policy">
              <a className="footer-text" href="/privacy">
                Privacy Policy
              </a>
              <a className="footer-text" href="/faq">
                FAQ
              </a>
            </div>
          </div>
          <div className="footer-right">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="sns-icon" src={facebookIcon} alt="facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="sns-icon" src={twitterIcon} alt="twitter" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="sns-icon" src={youtubeIcon} alt="youtube" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="sns-icon" src={instagramIcon} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
