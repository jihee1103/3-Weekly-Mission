import { useEffect, useState } from "react";
import { fetchUserData } from "../apis/api";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

function Account({ innerWidth }) {
  // console.log("?", innerWidth);
  const [userData, setUserData] = useState("");

  //유저 데이터 가져오기
  const handleLoadUser = async () => {
    const users = await fetchUserData();
    setUserData(users);
  };

  //초기데이터 설정
  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <>
      {userData ? (
        <div className="account-frame">
          <img
            className="profile"
            src={userData.profileImageSource}
            alt="profile-img"
          />
          {innerWidth >= 767 && <span className="email">{userData.email}</span>}
        </div>
      ) : (
        <a className="login" href="/signin">
          로그인
        </a>
      )}
    </>
  );
}

function Navbar({ innerWidth }) {
  return (
    <nav>
      <div className="gnb">
        <a href="/">
          <img className="logo" src={logo} alt="linkbrary-logo" />
        </a>
        <Account innerWidth={innerWidth} />
      </div>
    </nav>
  );
}

export default Navbar;
