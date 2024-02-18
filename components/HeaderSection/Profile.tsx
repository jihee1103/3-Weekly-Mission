// import React, { useEffect, useState } from 'react'
import useUserIdData from "../../hook/useUserIdData";
import Link from "next/link";
import { UserIdType } from "../../types/Types";
import styles from './HeaderSection.module.css';

export default function Profile() {
  const { userIdDatas } = useUserIdData();
  console.log(userIdDatas)
  return (
    <div>
      {userIdDatas ? ( // profileData가 존재하는지 확인 후 렌더링
        <div className={styles.nav}>
          <Link href="/">
            <img src="/image/logo.svg" alt="로고" />
          </Link>
          {userIdDatas.map((profile: UserIdType) => (
            <div className={styles.profile_Box} key={profile.id}>
              <img
                className={styles.profile_Image}
                src={profile.image_source}
                alt="내 프로필"
              />
              <span>{profile.email}</span>
            </div>
          ))}
        </div>
      ) : (
        <button>로그인</button>
      )}
    </div>
  );
}

// className={styles.profileImage} 하면 이미지가 사라져버림 
