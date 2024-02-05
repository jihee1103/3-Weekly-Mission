import LinkLogo from "../LinkLogo/LinkLogo.jsx";
import "./Sns.css";

function Sns({ className, target, rel }) {
  return (
    <div className={className}>
      <LinkLogo
        href="https://www.facebook.com/"
        logo="facebook"
        target={target}
        rel={rel}
      />
      <LinkLogo
        href="https://twitter.com/"
        logo="twitter"
        target={target}
        rel={rel}
      />
      <LinkLogo
        href="https://www.youtube.com/"
        logo="youtube"
        target={target}
        rel={rel}
      />
      <LinkLogo
        href="https://www.instagram.com/"
        logo="instagram"
        target={target}
        rel={rel}
      />
    </div>
  );
}

export default Sns;
