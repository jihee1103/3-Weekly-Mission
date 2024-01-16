import styles from './NormalButton.module.css';

const btnWidth = {
  short: 'cta-short',
  long: 'cta-long',
};

const NormalButton = ({ children, width, ...rest }) => {
  return (
    <a className={`${styles.cta} ${styles[btnWidth[width]]}`} {...rest}>
      {children}
    </a>
  );
};

export default NormalButton;
