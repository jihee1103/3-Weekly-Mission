import useUserIdData from "../../hook/useUserIdData";
import Link from "next/link";
import { UserIdType } from "../../types/Types";
import styles from "./HeaderSection.module.css";

export default function Profile() {
  const { userIdDatas } = useUserIdData();
  return (
    <div>
      {userIdDatas ? ( 
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
