import { NavBar } from "../NavBar/navbar.jsx";
import { AddLinkBar } from "../AddLinkBar/addlinkbar.jsx";
import "./header-style.css";

export function Header({ folder, user }) {
  return (
    <header className="header-section">
      <NavBar user={user} />
      <div className="header-info">
        <img
          src={folder.owner.profileImageSource}
          className="header-profile"
        ></img>
        <div className="header-user">
          {"@"}
          {folder.owner.name}
        </div>
        <div className="header-title">{folder.name}</div>
      </div>
    </header>
  );
}
