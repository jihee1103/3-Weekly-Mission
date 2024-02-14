import React, { useEffect, useState } from "react";
import { getUserFolder, getUserId } from "../../api";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-contents">
          <a href="./folder">
            <img
              className="header-logo-img"
              src="/imgs/logo.png"
              alt="코드잇로고"
            ></img>
          </a>
          <UserProfileInHeader />
        </div>
      </nav>
      <UserFolderProfile />
    </header>
  );
}

function UserProfileInHeader() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function handleLoginProfile() {
      const user = await getUserId();
      setUser(user);
    }
    handleLoginProfile();
  }, []);
  return (
    <a href="./folder" className="user-profile-login">
      {user ? (
        <>
          <img
            className="user-profile-login-img"
            src={user.profileImageSource}
            alt="사용자 이미지"
          ></img>
          <span className="user-profile-login-email">{user.email}</span>
        </>
      ) : (
        <img src="/imgs/로그인.png" alt="로그인" />
      )}
    </a>
  );
}

function UserFolderProfile() {
  const [userFolder, setUserFolder] = useState(null);
  useEffect(() => {
    async function handleUserFolderProfile() {
      const userFolder = await getUserFolder();
      setUserFolder(userFolder);
    }
    handleUserFolderProfile();
  }, []);
  return (
    <div className="userfolder-content">
      {userFolder && (
        <>
          <img
            className={"userfolder-content-img"}
            src={userFolder.folder.owner.profileImageSource}
            alt="폴더 사용자 이미지"
          ></img>
          <span className="userfolder-content-name">
            {userFolder.folder.owner.name}
          </span>
          <span className="userfolder-content-foldername">
            {userFolder.folder.name}
          </span>
        </>
      )}
    </div>
  );
}
