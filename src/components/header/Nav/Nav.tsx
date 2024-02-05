import { useState, useEffect } from 'react';
import { getUser, getUserById } from '../../../api';
import Profile from '../Profile/Profile';
import './Nav.css';

interface Props {
  className: string | undefined;
  setUserId: (value: number) => void | undefined;
  id: number | undefined;
}

export interface User {
  id: number;
  name: string;
  email: string;
  profileImageSource?: string;
  image_source?: string;
}

function Nav({ className, setUserId, id }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function applyGetUser() {
      const nextUser = await getUser();
      if (!nextUser) return;
      setUser(nextUser);
    }

    async function apllyGetUserById(id: number) {
      const nextUser = await getUserById(id);
      if (!nextUser) return;
      setUser(nextUser.data[0]);
      setUserId(nextUser.data[0].id);
    }

    if (id) apllyGetUserById(id);
    else applyGetUser();
  }, [id, setUserId]);

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
