import "./Header.css";
import { useEffect, useState } from "react";
import { getUserData } from "../../api/api";

const Header = () => {
  const [userData, setUserData] = useState();

  const handleUserData = async () => {
    const user = await getUserData();
    setUserData(user);
  };

  useEffect(() => {
    handleUserData();
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="/">
            <img src={process.env.PUBLIC_URL + `/assets/logo.png`} alt="로고" />
          </a>

          {userData ? (
            <div className="userInfo">
              <img
                className="userImg"
                src={userData.profileImageSource}
                alt="프로필 이미지"
              ></img>
              <h2 className="userEmail">{userData.email}</h2>
            </div>
          ) : (
            <a className="login_btn" href="/signin.html">
              로그인
            </a>
          )}
        </nav>
      </header>
    </>
  );
};
export default Header;
