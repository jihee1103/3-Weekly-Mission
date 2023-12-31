import { useEffect, useState } from "react";
import { fetchUserData } from "../apis/api";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

function Account() {
  const [userData, setUserData] = useState("");

  //유저 데이터 가져오기
  const handleLoadUser = async () => {
    const response = await fetchUserData();
    setUserData(response);
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
          <span className="email">{userData.email}</span>
        </div>
      ) : (
        <a className="login" href="/signin">
          로그인
        </a>
      )}
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <div className="gnb">
        <a href="/">
          <img className="logo" src={logo} alt="linkbrary-logo" />
        </a>
        <Account />
      </div>
    </nav>
  );
}

export default Navbar;
