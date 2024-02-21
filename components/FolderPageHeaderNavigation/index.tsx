import FolderPageHeaderProfile from "../FolderPageHeaderProfile";
import styles from "./index.module.css";
import GoMainLogo from "../GoMainLogo";

const FolderPageHeaderNavigation = () => {
  return (
    <nav className={styles.nav}>
      <GoMainLogo />
      <FolderPageHeaderProfile />
    </nav>
  );
};
export default FolderPageHeaderNavigation;
