import "./Navbar.css";
import imageData from "../../assets/imageData";
import { Link } from "react-router-dom";
import { NavbarUserInfo } from "../../types/userType";
import { StringUndefined } from "../../types/types";

interface Props {
  user: NavbarUserInfo | undefined;
}

export default function Navbar({ user }: Props) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to={"/"}>
          <img
            src={imageData.logoImg}
            className="logo"
            alt="홈으로 이동하는 로고"
          />
        </Link>

        {user ? (
          <NavProfile user={user} />
        ) : (
          <Link to={"/"}>
            <button type="button" className="login-btn">
              로그인
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

function NavProfile({ user }: Props) {
  const userEmail: StringUndefined = user?.email;
  const source: StringUndefined = user?.profileImageSource;

  return (
    <div className="userProfile">
      {source ? (
        <img className="profile-img" src={source} alt="프로필 사진" />
      ) : (
        <div className="profile-default-img">
          <img src={imageData.defaultProfileImg} alt="프로필 사진" />
        </div>
      )}

      <span className="userName">{userEmail}</span>
    </div>
  );
}
