import { forwardRef } from 'react';

import SocialMediaBox from '@components/ui/molecules/box/social-media-box/SocialMediaBox';

import { socialMediaIcons } from './data/socialMediaIcons';
import './CommonFooter.css';

const CommonFooter = forwardRef<HTMLElement | null>((_, ref) => {
  return (
    <footer ref={ref}>
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
        <SocialMediaBox socialMediaIcons={socialMediaIcons} />
      </section>
    </footer>
  );
});

CommonFooter.displayName = 'CommonFooter';

export default CommonFooter;
