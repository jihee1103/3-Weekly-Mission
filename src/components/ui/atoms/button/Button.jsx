import './Button.css';

const btnWidth = {
  short: 'cta-short',
  long: 'cta-long',
};

const Slot = ({ children, ...rest }) => {
  return <a {...rest}>{children}</a>;
};

const Button = ({ children, width = 'short', href, asAnchor = false, ...rest }) => {
  const w = btnWidth[width];
  const Comp = asAnchor ? Slot : 'button';
  return (
    <Comp className={`cta ${w}`} href={href} {...rest}>
      {children}
    </Comp>
  );
};
export default Button;
