import logo from './images/logo.svg';
import { getUserData } from '../api/api';
import './style.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [user, setUser] = useState({});

  const setUserData = async () => {
    const userData = await getUserData();
    setUser(userData);
  };

  useEffect(() => {
    setUserData();
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="linkbrary-icon">
          <img src={logo} alt="홈으로 연결된 Linkbrary 로고"></img>
        </a>
        {user.email ? (
          <div className="header__profile">
            <img src={user.profileImageSource} width="28" alt="프로필 이미지" />
            <div className="user-email">{user.email}</div>
          </div>
        ) : (
          <a className="btn header__btn-login" href="/signin">
            로그인
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
