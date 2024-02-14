import styles from './LinkString.module.css';

interface Props {
  className: string;
}

export default function LinkString({ className }: Props) {
  return (
    <div className={styles[className]}>
      <a className={styles['footer-link']} href="privacy.html">
        Privacy Policy
      </a>
      <a className={styles['footer-link']} href="faq.html">
        FAQ
      </a>
    </div>
  );
}
