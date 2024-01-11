import logo from "../../assets/logo.svg";
import "./style.css";

const Nav = ({ user, className = "" }) => {
  return (
    <header className={className}>
      <div className="header-container">
        <a id="logo" href="/">
          <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {user ? (
          <div className="user-profile">
            <img className="user-image" src={user.image_source} alt={user.name} />
            <div className="user-email">{user.email}</div>
          </div>
        ) : (
          <a href="/" className="login-button">
            로그인
          </a>
        )}
      </div>
    </header>
  );
};

export default Nav;
