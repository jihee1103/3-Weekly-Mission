import "./Header.css";
import { useEffect, useState } from "react";
import { getFolderUserData, getUserData } from "../../api/api";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  const [userData, setUserData] = useState();
  const [folderUserData, setFolderUserData] = useState();

  const handleUserData = async () => {
    const user = await getUserData();
    setUserData(user);
  };

  const handleFolderUserData = async () => {
    const folderUserData = await getFolderUserData();
    setFolderUserData(folderUserData);
  };

  useEffect(() => {
    handleFolderUserData();

    handleUserData();
  }, []);

  switch (location.pathname) {
    case "/shared":
      return (
        <>
          <header>
            <nav>
              <a href="/">
                <img
                  src={process.env.PUBLIC_URL + `/assets/logo.png`}
                  alt="로고"
                />
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
    case "/folder":
      return (
        <>
          <header>
            <nav>
              <a href="/">
                <img
                  src={process.env.PUBLIC_URL + `/assets/logo.png`}
                  alt="로고"
                />
              </a>

              {folderUserData ? (
                <div className="userInfo">
                  <img
                    className="userImg"
                    src={folderUserData.data[0].image_source}
                    alt="프로필 이미지"
                  ></img>
                  <h2 className="userEmail">{folderUserData.data[0].email}</h2>
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
    default:
      return null;
  }
};
export default Header;
