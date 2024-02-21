"use client";

import SharedPageHeaderProfile from "../SharedPageHeaderProfile";
import styles from "./index.module.css";
import GoMainLogo from "../GoMainLogo";

const SharedPageHeaderNavigation = () => {
  return (
    <nav className={styles.nav}>
      <GoMainLogo />
      <SharedPageHeaderProfile />
    </nav>
  );
};
export default SharedPageHeaderNavigation;
