import React from "react";
import { useState, useEffect } from "react";
import { UserId, UserFolder } from "../api.js";
import "./Header.css";
import logo from "../images/logo.svg";

function HeaderUserInfo() {
  const [user, setUser] = useState(null);
  const loginButtonImage = (
    <img src={"./images/login.png"} alt="로그인 버튼 이미지"></img>
  );
  useEffect(() => {
    async function LoginUserId() {
      const user = await UserId();
      setUser(user);
    }
    LoginUserId();
  }, []);
  return (
    <a href="./folder" className="user-profile">
      {user ? (
        <>
          <img
            className="user-profile-image"
            src={user.profileImageSource}
            alt="사용자 프로필 이미지"
          ></img>
          <span className="user-profile-email">{user.email}</span>
        </>
      ) : (
        loginButtonImage
      )}
    </a>
  );
}

function HeaderUserFolder() {
  const [userFolder, setUserFolder] = useState(null);
  useEffect(() => {
    async function LoginUserFolder() {
      const userFolder = await UserFolder();
      setUserFolder(userFolder);
    }
    LoginUserFolder();
  }, []);
  return (
    <div className="folder-box">
      {userFolder ? (
        <>
          <img
            className={"folder-box-image"}
            src={userFolder.folder.owner.profileImageSource}
            alt="사용자 프로필"
          ></img>
          <span className="folder-box-name">
            {userFolder.folder.owner.name}
          </span>
          <span className="folder-box-folder-name">
            {userFolder.folder.name}
          </span>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <div className="contents">
          <a href="./folder">
            <img
              className="contents-logo-image"
              src={logo}
              alt="Linkbrary 로고"
            ></img>
          </a>
          <HeaderUserInfo />
        </div>
      </nav>
      <HeaderUserFolder />
    </header>
  );
}

export default Header;
