import { useState, useEffect } from 'react';
import { getUser, getUserById } from '@/pages/api/api';
import Profile from '../Profile/Profile';
import styles from './Nav.module.css';

interface Props {
  className?: string | undefined;
  setUserId?: (value: number) => void;
  id?: number | undefined;
}

export interface User {
  id: number;
  name: string;
  email: string;
  profileImageSource?: string;
  image_source?: string;
}

export default function Nav({ className = '', setUserId, id }: Props) {
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
      if (setUserId) {
        setUserId(nextUser.data[0].id);
      }
    }

    if (id) apllyGetUserById(id);
    else applyGetUser();
  }, [id, setUserId]);

  return (
    <nav className={`${styles[className]} ${styles['nav']}`}>
      <a href="index.html">
        <img
          className={styles['logo']}
          src="/images/logo.svg"
          alt="Linkbrary 로고"
        />
      </a>
      {user ? (
        <Profile user={user} />
      ) : (
        <a
          className={`${styles['cta']} ${styles['cta-short']}`}
          href="signin.html"
        >
          <span>로그인</span>
        </a>
      )}
    </nav>
  );
}
