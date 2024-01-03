import "./Navbar.css";
import logoImg from "../../assets/images/logo.svg";
import defaultProfileImg from "../../assets/images/shared-myprofile.svg";

export default function Navbar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="./index.html">
          <img src={logoImg} className="logo" alt="홈으로 이동하는 로고" />
        </a>

        {user ? (
          <NavProfile user={user} />
        ) : (
          <a href="week5/auth/signin.html">
            <button type="button" className="login-btn">
              로그인
            </button>
          </a>
        )}
      </div>
    </nav>
  );
}

function NavProfile({ user }) {
  const userEmail = user.email;
  const source = user.profileImageSource;

  return (
    <div className="userProfile">
      {source ? (
        <img className="profile-img" src={source} alt="프로필 사진" />
      ) : (
        <div className="profile-default-img">
          <img src={defaultProfileImg} alt="프로필 사진" />
        </div>
      )}

      <span className="userName">{userEmail}</span>
    </div>
  );
}
