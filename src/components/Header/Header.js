import logo from "../../assets/images/logo.svg";

const Header = ({ login, userData }) => {
    return (
        <div className="header">
            <div className="header--container">
                <div className="header__img">
                    <img src={logo} alt="로고 이미지"></img>
                </div>
                {login ? (
                    <div className="header__profile">
                        <img src={userData.profileImageSource} alt="프로필 이미지" />
                        <div>{userData.email}</div>
                    </div>
                ) : (
                    <button className="header__btn-login">로그인</button>
                )}
            </div>
        </div>
    );
};

export default Header;
