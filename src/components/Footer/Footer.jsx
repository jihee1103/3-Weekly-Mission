import facebookImg from "../../asset/akar-icons_facebook-fill.svg";
import twitterImg from "../../asset/akar-icons_twitter-fill.svg";
import youtubeImg from "../../asset/akar-icons_youtube-fill.svg";
import instagramImg from "../../asset/ant-design_instagram-filled.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footer-contents">
          <div className="footer-contents-box">
            <div className="footer-copyright">
              <span className="footer-codeit">©codeit - 2023</span>
            </div>
            <div className="footer-policy-text">
              <a href="/privacy">
                <span className="footer-text-left">Privacy Policy</span>
              </a>
              <a href="/faq">
                <span>FAQ</span>
              </a>
            </div>
            <div className="footer-logo">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={facebookImg}
                  alt="facebook"
                />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={twitterImg}
                  alt="twitter"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={youtubeImg}
                  alt="youtube"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagramImg}
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
