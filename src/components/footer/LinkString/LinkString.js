import "./LinkString.css";

function LinkString({ className }) {
  return (
    <div className={className}>
      <a className="footer-link" href="privacy.html">
        Privacy Policy
      </a>
      <a className="footer-link" href="faq.html">
        FAQ
      </a>
    </div>
  );
}

export default LinkString;
