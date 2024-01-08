import './AnchorButton.css';

const btnWidth = {
  short: 'cta-short',
  long: 'cta-long',
};

const AnchorButton = ({ children, width = 'short', href, ...rest }) => {
  return (
    <a className={`cta ${btnWidth[width]}`} href={href} {...rest}>
      {children}
    </a>
  );
};
export default AnchorButton;
