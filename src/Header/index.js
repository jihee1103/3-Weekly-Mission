import { useState, useEffect } from 'react';
import { getUser, getProfile } from '../api/api';
import './style.css';

const Header = () => {
  const [user, setUser] = useState({});
  const headerClass =
    location.pathname === '/folder' ? 'header__folder' : 'header';

  useEffect(() => {
    if (location.pathname === '/shared') {
      (async () => {
        const userData = await getUser();
        setUser(userData);
      })();
    }
    if (location.pathname === '/folder') {
      (async () => {
        const userData = await getProfile();
        setUser(userData?.data[0]);
      })();
    }
  }, []);

  return (
    <header className={headerClass}>
      <nav className="nav">
        <a href="/" className="linkbrary-icon">
          <img src="/logo.svg" alt="홈으로 연결된 Linkbrary 로고"></img>
        </a>
        {user.email ? (
          <div className="header__profile">
            <img src={user.image_source} width="28" alt="프로필 이미지" />
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
