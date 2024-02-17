import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
    <div className={styles.footer_box}>
      <span className={styles.write}>©codeit - 2023</span>
      <ul className={styles.footer_links}>
        <li> 
          <a className={styles.footer_link} href="../Privacy/privacy.html">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className={styles.footer_link} href="../FAQ/FAQ.html">
            FAQ
          </a>
        </li>
      </ul>
      <ul className={styles.icon_list}>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel='noopener noreferrer'>
            <img src="/image/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고"/>
          </a>
        </li>
        <li>             
          <a href="https://twitter.com/" target="_blank" rel='noopener noreferrer'>
            <img src="twitter.svg" alt="twitter 홈페이지로 연결된 twitter 로고"/>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel='noopener noreferrer'>
            <img src="youtube.svg" alt="youtube 홈페이지로 연결된 youtube 로고"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel='noopener noreferrer'>
            <img src="instagram.svg" alt="instagram 홈페이지로 연결된 instagram 로고"/>
          </a>
        </li>
      </ul>
    </div>
  </footer>
  )
}

