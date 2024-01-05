const Header = ({ login, userData }) => {
  return (
    <div className="header">
      <div className="header--container">
        <a href="/" className="header__img">
          <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="로고 이미지" />
        </a>
        {login ? (
          <div className="header__profile">
            <img src={userData.image_source} alt="프로필 이미지" />
            <div>{userData.email}</div>
          </div>
        ) : (
          <button type="button" className="header__btn-login">
            <a href="/signin">로그인</a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
