"use client";

import React, { useEffect, useState } from "react";
import { getUserFolder, getUserId } from "../../api/api";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <nav className={cx("nav")}>
        <div className={cx("nav-contents")}>
          <Link href="/">
            <img
              className={cx("header-logo-img")}
              src="images/logo.png"
              alt="코드잇로고"
            ></img>
          </Link>
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
    <Link href="/folder" className={cx("user-profile-login")}>
      {user ? (
        <>
          <img
            className={cx("user-profile-login-img")}
            src={user.profileImageSource}
            alt="사용자 이미지"
          ></img>
          <span className={cx("user-profile-login-email")}>{user.email}</span>
        </>
      ) : (
        <img src="/imgs/로그인.png" alt="로그인" />
      )}
    </Link>
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
    <div className={cx("userfolder-content")}>
      {userFolder && (
        <>
          <img
            className={cx("userfolder-content-img")}
            src={userFolder.folder.owner.profileImageSource}
            alt="폴더 사용자 이미지"
          ></img>
          <span className={cx("userfolder-content-name")}>
            {userFolder.folder.owner.name}
          </span>
          <span className={cx("userfolder-content-foldername")}>
            {userFolder.folder.name}
          </span>
        </>
      )}
    </div>
  );
}
