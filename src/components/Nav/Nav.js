import { useState, useEffect } from "react";
import { getUser } from "../../api";
import "./Nav.css";

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function applyGetUser() {
      const nextUser = await getUser();
      if (!nextUser) return;
      setUser(nextUser);
    }

    applyGetUser();
  }, []);

  return (
    <nav>
      <a href="index.html">
        <img className="logo" src="./images/logo.svg" alt="Linkbrary 로고" />
      </a>
      {user ? (
        <div className="user">
          <img
            className="profile"
            src={user.profileImageSource}
            alt="프로필 사진"
          />
          <span className="email">{user.email}</span>
        </div>
      ) : (
        <a className="cta cta-short" href="signin.html">
          <span>로그인</span>
        </a>
      )}
    </nav>
  );
}

export default Nav;
