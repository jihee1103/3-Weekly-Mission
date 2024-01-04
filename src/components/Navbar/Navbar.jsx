import { useEffect, useState } from 'react';
import logoImg from '../../asset/logo.svg';
import './Navbar.css';
import NavProfile from './NavProfile';
import getFetchRequest from '../../utils/getFetchRequest';
import { API_USER, BASE_API_HOST } from '../../constants/api';

export default function Navbar() {
  const [userEmail, setUserEmail] = useState(null);
  const [userProfileImg, setUserProfileImg] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const result = await getFetchRequest(BASE_API_HOST, API_USER);
        setUserEmail(result.email);
        setUserProfileImg(result.profileImageSource);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <header className="header">
      <section className="header-box">
        <a href="/">
          <img src={logoImg} alt="logo" className="header-logo" />
        </a>
        {userEmail ? (
          <NavProfile userEmail={userEmail} userProfileImg={userProfileImg} />
        ) : (
          <a href="/">
            <div className="header-login">
              <span>로그인</span>
            </div>
          </a>
        )}
      </section>
    </header>
  );
}
