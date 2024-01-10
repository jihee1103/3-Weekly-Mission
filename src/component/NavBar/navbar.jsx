import "./nav-style.css";
import logo from "./logo.png";

export function NavBar({ user }) {
  return (
    <>
      <div className="nav-section">
        <div className="nav-first-section">
          <img src={logo}></img>
        </div>

        <div className="nav-second-section">
          <div className="nav-profile">
            <img src={user.profileImageSource}></img>
          </div>
          <h3 className="nav-profile-info">{user.email}</h3>
        </div>
      </div>
    </>
  );
}
