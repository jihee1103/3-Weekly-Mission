import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <section className='footer-area'>
        <address className='copyright' role='contentinfo'>
          <span>&#169;codeit</span>- 2023
        </address>
        <div className='service-box' role='contentinfo link'>
          <a className='service-policy' href='/privacy/'>
            Privacy Policy
          </a>
          <a className='service-faq' href='/faq/'>
            FAQ
          </a>
        </div>
        <ul className='social-media-box'>
          <li>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <img
                alt='logo linked to facebook homepage'
                src={`${process.env.PUBLIC_URL}/images/social-media/facebook.svg`}
              />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
              <img
                alt='logo linked to twitter homepage'
                src={`${process.env.PUBLIC_URL}/images/social-media/twitter.svg`}
              />
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
              <img
                alt='logo linked to youtube homepage'
                src={`${process.env.PUBLIC_URL}/images/social-media/youtube.svg`}
              />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <img
                alt='logo linked to instagram homepage'
                src={`${process.env.PUBLIC_URL}/images/social-media/instagram.svg`}
              />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
