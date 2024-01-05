import { useEffect, useState } from "react";
import { getUserData } from "../../apis/api";
import "./Navbar.css";
import useAsync from "../../hooks/useAsync";

function Account() {
  const [userData, setUserData] = useState("");
  const [isLoading, loadingError, getUserAsync] = useAsync(getUserData);

  //초기데이터 설정
  useEffect(() => {
    //유저 데이터 가져오기-> custom Hook으로 수정
    const handleLoadUser = async () => {
      // const users = await getUserData();
      // setUserData(users);
      let result = await getUserAsync();
      if (!result) return;

      setUserData(result);
    };

    handleLoadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <img className="logo" src="/assets/logo.svg" alt="linkbrary-logo" />
        </a>
        <Account />
      </div>
    </nav>
  );
}

export default Navbar;
