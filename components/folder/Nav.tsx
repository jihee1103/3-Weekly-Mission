"use client";

import React, { useEffect, useState } from "react";
import { User, getUserProfile } from "../../api/api";
import styles from "./Nav.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function Nav() {
  return (
    <nav className={cx("nav")}>
      <div className={cx("nav-content")}>
        <Link href="/">
          <img
            className={cx("header-logo-img")}
            src="/images/logo.png"
            alt="코드잇로고"
          ></img>
        </Link>
        <UserProfileInHeader />
      </div>
    </nav>
  );
}

function UserProfileInHeader() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    async function handleLoginProfile() {
      const user = await getUserProfile(1);
      setUser(user);
    }
    handleLoginProfile();
  }, []);
  return (
    <Link className={cx("userProfile-link")} href="/folder">
      {user ? (
        <>
          <img
            className={cx("userProfile-login-img")}
            src={user.image_source}
            alt="사용자 이미지"
          />
          <span className={cx("userProfile-login-email")}>{user.email}</span>
        </>
      ) : (
        <img src="images/로그인.png" alt="로그인" />
      )}
    </Link>
  );
}
