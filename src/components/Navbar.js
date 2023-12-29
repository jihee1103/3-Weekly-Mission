import logoImg from "../asset/logo.svg";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <section className="header-box">
        <a href="/">
          <img
            src={logoImg}
            alt="logo"
            className="header-logo"
          />
        </a>
        <a href="/">
          <div className="header-login">
            <span>로그인</span>
          </div>
        </a>
      </section>
    </header>
  );
}
