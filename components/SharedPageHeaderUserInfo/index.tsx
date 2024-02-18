"use client";

import { useContext } from "react";
import { SharedPageStateContext } from "../../app/shared/page";
import Image from "next/image";
import styles from "./index.module.css";

const SharedPageHeaderUserInfo = () => {
  const context = useContext(SharedPageStateContext);

  if (!context) {
    return null;
  }

  const { folderData } = context;
  if (!folderData) {
    return null;
  }

  return (
    <div className={styles.div}>
      <Image
        src={folderData.owner.profileImageSource}
        alt="폴더 소유자 프로필 이미지"
        height={60}
        width={60}
      />
      <span>{folderData.owner.name}</span>
      <h1>{folderData.name}</h1>
    </div>
  );
};

export default SharedPageHeaderUserInfo;
