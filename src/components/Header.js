import logo from "../assets/logo.svg";
import "./Header.css";
import useGetUserAsync from "../hooks/useGetUserAsync";

export default function Header({isSticky}) {
  const [profileImageSource, email] = useGetUserAsync();
  
  return (
    <div className="nav-wrapper">
      <div className={isSticky ? "nav-folder-bg": "nav-bg"}/>
      <header className={isSticky ? "nav-folder" : "nav"} >
        <img src={logo} className="logo" alt="logo" />
        <div className="profile-wrapper">
          <img
            className="profile-img"
            src={profileImageSource}
            alt="profile-img"
          />
          <span className="profile-email">{email ?? "로그인"}</span>
        </div>
      </header>
    </div>
  );
}