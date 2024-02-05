import Sns from "../Sns/Sns";
import LinkString from "../LinkString/LinkString";
import "./FooterLinks.css";

function FooterLinks(target, rel) {
  return (
    <>
      <LinkString className="footer-links" />
      <Sns className="sns" target={target} rel={rel} />
    </>
  );
}

export default FooterLinks;
