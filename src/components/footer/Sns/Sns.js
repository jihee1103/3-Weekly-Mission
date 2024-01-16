import LinkLogo from "../LinkLogo/LinkLogo.js";
import "./Sns.css";

function Sns({ className, props }) {
  return (
    <div className={className}>
      <LinkLogo
        href="https://www.facebook.com/"
        logo="facebook"
        props={props}
      />
      <LinkLogo href="https://twitter.com/" logo="twitter" props={props} />
      <LinkLogo href="https://www.youtube.com/" logo="youtube" props={props} />
      <LinkLogo
        href="https://www.instagram.com/"
        logo="instagram"
        props={props}
      />
    </div>
  );
}

export default Sns;
