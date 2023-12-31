import './Button.css';

const btnWidth = {
  short: 'cta-short',
  long: 'cta-long',
};

const Button = ({ children, width = 'short', href }) => {
  const w = btnWidth[width];
  return (
    <a className={`cta ${w}`} href={href} rel='nofollow'>
      {children}
    </a>
  );
};
export default Button;
