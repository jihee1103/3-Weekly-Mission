import Sns from "../Sns/Sns";
import LinkString from "../LinkString/LinkString";
import "./FooterLinks.css";

function FooterLinks(props) {
  return (
    <>
      <LinkString className="footer-links" />
      <Sns className="sns" props={props} />
    </>
  );
}

export default FooterLinks;
