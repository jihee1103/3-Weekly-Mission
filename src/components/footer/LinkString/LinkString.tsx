import './LinkString.css';

interface Props {
  className: string;
}

export default function LinkString({ className }: Props) {
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
