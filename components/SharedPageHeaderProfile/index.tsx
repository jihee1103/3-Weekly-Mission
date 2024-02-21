"use client";

import { useContext } from "react";
import SharedPageStateContext from "../../context/SharedPageStateContext";
import Image from "next/image";
import styles from "./index.module.css";

const SharedPageHeaderProfile = () => {
  const context = useContext(SharedPageStateContext);
  if (!context || !context.userData) {
    return null;
  }
  const { userData } = context;
  return (
    <div className={styles.div}>
      {userData && (
        <>
          <Image
            src={userData.profileImageSource}
            width={25}
            height={25}
            alt="프로필 이미지"
            className={styles.img}
          />
          <span>{userData.email}</span>
        </>
      )}
    </div>
  );
};
export default SharedPageHeaderProfile;
