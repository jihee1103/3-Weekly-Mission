import getData from "../api/getData";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = function () {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const result = await getData("/sample/user");
      setProfileData(result);
    };

    data();
  }, []);

  const logInButton = <button className="cta cta-short">로그인</button>;
  const userProfile = (
    <div className="userProfile">
      <img className="profileImg" src={profileData.profileImageSource} alt="프로필이미지" />
      <p>{profileData.email}</p>
    </div>
  );

  return (
    <div className="header">
      <nav>
        <img src="/img/logo.svg" alt="Linkbrary 로고" />
        {profileData === "[]" ? logInButton : userProfile}
      </nav>
    </div>
  );
};

export default Header;
