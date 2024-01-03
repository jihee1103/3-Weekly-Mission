import React from "react";
import Profile from "./profile";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <img src="/images/logo.png" alt="로고" />
        </a>
      </div>
      <div className="header-content">
        <Profile />
      </div>
    </header>
  );
}

export default Header;
