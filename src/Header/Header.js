import "./Header.css";
import logoImg from "../images/logo.svg";

function Header() {
  return (
    <header>
      <div>
        <a href="/">
          <img src={logoImg} alt="로고" />
        </a>
        <a href="./signin/sign.html">로그인</a>
      </div>
    </header>
  );
}

export default Header;
