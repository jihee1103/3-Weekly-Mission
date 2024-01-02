import logo from "../assets/logo.svg";
import myProfile from "../assets/myprofile.svg";
import "./Header.css";
import { getUser } from "../api";
import { useEffect, useState } from "react";

export default function Header() {
  const [email, setEmail] = useState("");
  const userInformation = async () => {
    const { email } = await getUser();
    setEmail(email);
  };

  useEffect(() => {
    userInformation();
  }, []);
  return (
    <>
      <div className="nav-bg"></div>
      <header className="nav">
        <img src={logo} className="logo" alt="logo" />
        <div className="profile-wrapper">
          <div className="profile-bg">
            <img className="profile-img" src={myProfile} alt="profile-img" />
          </div>
          <span className="profile-email">{email ?? "로그인"}</span>
        </div>
      </header>
    </>
  );
}
