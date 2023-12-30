import { useEffect, useState } from "react";
import logoImg from "../asset/logo.svg";
import "../css/Navbar.css";
import NavProfile from "./NavProfile";

export default function Navbar() {
  const [userEmail, setUserEmail] = useState(null);
  const [userProfileImg, setUserProfileImg] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
        if (response.status === 200) {
          const userInfo = await response.json();
          setUserEmail(userInfo.email);
          setUserProfileImg(userInfo.profileImageSource);
        } else throw new Error("fetch error");
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

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
        {userEmail ? (
          <NavProfile
            userEmail={userEmail}
            userProfileImg={userProfileImg}
          />
        ) : (
          <a href="/">
            <div className="header-login">
              <span>로그인</span>
            </div>
          </a>
        )}
      </section>
    </header>
  );
}
