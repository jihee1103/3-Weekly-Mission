import logo from '../../assets/images/logo.svg';

const Header = ({ login, userData }) => {
  return (
    <div className="header">
      <div className="header--container">
        <a href="/" className="header__img">
          <img src={logo} alt="로고 이미지"></img>
        </a>
        {login ? (
          <div className="header__profile">
            <img src={userData.profileImageSource} alt="프로필 이미지" />
            <div>{userData.email}</div>
          </div>
        ) : (
          <button className="header__btn-login">
            <a href="/signin">로그인</a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
