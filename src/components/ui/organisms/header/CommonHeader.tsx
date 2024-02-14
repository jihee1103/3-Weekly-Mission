import { IProfileData } from '@api/folder-page/getProfileData';

import LoginButton from './comp/login-button/LoginButton';
import LoginSuccessProfile from './comp/login-success-profile/LoginSuccessProfile';

import './CommonHeader.css';

type THeaderProps = {
  profileData: IProfileData | null;
};

const CommonHeader = ({ profileData }: THeaderProps) => {
  return (
    <header id='header' role='heading' aria-level={1}>
      <nav className='gnb absolute' role='navigation'>
        <a href='/' rel='nofollow'>
          <img alt='symlink logo linked to home' src={'/images/logo/landing-logo.svg'} />
        </a>
        {profileData?.email ? <LoginSuccessProfile profileData={profileData} /> : <LoginButton>로그인</LoginButton>}
      </nav>
    </header>
  );
};

export default CommonHeader;
