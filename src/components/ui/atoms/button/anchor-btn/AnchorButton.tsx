import './AnchorButton.css';

const btnWidth = {
  short: 'cta-short',
  long: 'cta-long',
};

type TAnchorButton = {
  children: React.ReactNode;
  width?: keyof typeof btnWidth;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const AnchorButton = ({ children, width = 'short', href, ...rest }: TAnchorButton) => {
  return (
    <a className={`cta ${btnWidth[width]}`} href={href} {...rest}>
      {children}
    </a>
  );
};

export default AnchorButton;
