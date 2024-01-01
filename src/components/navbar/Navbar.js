import { useEffect, useState } from "react";
import "./Navbar.css";
import UserProfile from "../user_profile/UserProfile";
import logo from "../../images/logo.png";

function Nav() {
  const [userEmail, setUserEmail] = useState("");
  const [userProfileImg, setUserProfileImg] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        if (response.status === 200) {
          const user = await response.json();
          setUserEmail(user.email);
          setUserProfileImg(user.profileImageSource);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getUserInfo();
  }, []);

  return (
    <>
      <nav>
        <div className="nav_wrap">
          <a href="/">
            <img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
          </a>
          {userEmail ? (
            <UserProfile
              userEmail={userEmail}
              userProfileImg={userProfileImg}
            />
          ) : (
            <a href="/">
              <div className="login-btn">
                <span>로그인</span>
              </div>
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
