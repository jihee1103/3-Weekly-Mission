"use client";

import Image from "next/image";
import linkbrary from "./linkbrary.svg";
import SharedPageHeaderProfile from "../SharedPageHeaderProfile";
import styles from "./index.module.css";

const SharedPageHeaderNavigation = () => {
  return (
    <nav className={styles.nav}>
      <Image
        src={linkbrary}
        width={133}
        height={24}
        alt="linkbrary 로고 이미지"
      />
      <SharedPageHeaderProfile />
    </nav>
  );
};
export default SharedPageHeaderNavigation;
