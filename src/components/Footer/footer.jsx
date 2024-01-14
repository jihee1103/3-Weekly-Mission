import "./footer-style.css";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import instagram from "./instagram.png";

export function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-first-section">
          <h3 className="footer-font-style">©codeit - 2023</h3>
        </div>

        <div className="footer-second-section">
          <div className="footer-second-section-wrap">
            <h3 className="footer-font-style">Privacy Policy</h3>
            <h3 className="footer-font-style">FAQ</h3>
          </div>
        </div>

        <div className="footer-third-section">
          <img src={facebook} className="footer-icon"></img>
          <img src={twitter} className="footer-icon"></img>
          <img src={youtube} className="footer-icon"></img>
          <img src={instagram} className="footer-icon"></img>
        </div>
      </footer>
    </>
  );
}
