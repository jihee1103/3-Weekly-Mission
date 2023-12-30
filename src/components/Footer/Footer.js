import facebook from "../../assets/images/facebook_icon.svg";
import twitter from "../../assets/images/twitter_icon.svg";
import youtube from "../../assets/images/youtube_icon.svg";
import instagram from "../../assets/images/instagram_icon.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-font footer-codeit">©codeit - 2023</div>
            <div className="footer-privacy-policy-and-faq">
                <div className="footer-font footer-privacy-policy">Privacy Policy</div>
                <div className="footer-font footer-faq">FAQ</div>
            </div>
            <div className="footer-font footer-link">
                <img src={facebook} alt="아이콘" />
                <img src={twitter} alt="아이콘" />
                <img src={youtube} alt="아이콘" />
                <img src={instagram} alt="아이콘" />
            </div>
        </footer>
    );
};

export default Footer;
