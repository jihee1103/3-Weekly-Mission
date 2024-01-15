import Sns from "../Sns/Sns";
import LinkString from "../LinkString/LinkString";
import "./Links.css";

function Links({ props }) {
  return (
    <>
      <LinkString className="footer-links" />
      <Sns className="sns" props={props} />
    </>
  );
}

export default Links;
