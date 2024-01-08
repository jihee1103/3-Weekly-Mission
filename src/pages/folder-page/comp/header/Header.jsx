import LoginButton from './comp/login-button/LoginButton';
import LoginSuccessProfile from './comp/login-success-profile/LoginSuccessProfile';
import { useGetProfileData } from './hooks/useGetProfileData';
import './Header.css';

const Header = () => {
  const profileData = useGetProfileData();
  return (
    <header id='header' role='heading' aria-level={1}>
      <nav className='gnb absolute' role='navigation'>
        <a href='/' rel='nofollow'>
          <img alt='symlink logo linked to home' src={`${process.env.PUBLIC_URL}/images/logo/landing-logo.svg`} />
        </a>
        {profileData?.email ? <LoginSuccessProfile profileData={profileData} /> : <LoginButton>로그인</LoginButton>}
      </nav>
    </header>
  );
};
export default Header;
