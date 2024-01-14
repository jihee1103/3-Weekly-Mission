import { NavBar } from "../NavBar/navbar.jsx";
import "./header-style.css";

export function Header({ user }) {
  return (
    <header className="header-section">
      <NavBar user={user} />
    </header>
  );
}
