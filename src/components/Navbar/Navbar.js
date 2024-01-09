import { useUserData } from "../../hooks/useUserData";
import "./Navbar.css";

function Account() {
  const { userData, loadingError } = useUserData();

  return (
    <>
      {userData ? (
        <div className="account-frame">
          <img
            className="profile"
            src={userData?.image_source}
            alt="profile-img"
          />
          <span className="email">{userData?.email}</span>
        </div>
      ) : (
        <a className="login" href="/signin">
          로그인
        </a>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}

function Navbar({ isSticky }) {
  return (
    <nav className={`nav ${isSticky ? "folder" : ""}`}>
      <div className="gnb">
        <a href="/">
          <img className="logo" src="/assets/logo.svg" alt="linkbrary-logo" />
        </a>
        <Account />
      </div>
    </nav>
  );
}

export default Navbar;
