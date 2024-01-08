import { useState, useEffect } from "react";
import { getUser, getUserById } from "../../api";
import Profile from "../Profile/Profile";
import "./Nav.css";

function Nav({ className, id = undefined }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function applyGetUser() {
      const nextUser = await getUser();
      if (!nextUser) return;
      setUser(nextUser);
    }

    async function apllyGetUserById(id) {
      const nextUser = await getUserById(id);
      if (!nextUser) return;
      setUser(nextUser.data[0]);
    }

    if (id) apllyGetUserById(id);
    else applyGetUser();
  }, [id]);

  return (
    <nav className={className}>
      <a href="index.html">
        <img className="logo" src="./images/logo.svg" alt="Linkbrary 로고" />
      </a>
      {user ? (
        <Profile user={user} />
      ) : (
        <a className="cta cta-short" href="signin.html">
          <span>로그인</span>
        </a>
      )}
    </nav>
  );
}

export default Nav;
