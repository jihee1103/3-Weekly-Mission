import Image from "next/image";
import linkbrary from "./linkbrary.svg";
import FolderPageHeaderProfile from "../FolderPageHeaderProfile";
import styles from "./index.module.css";

const FolderPageHeaderNavigation = () => {
  return (
    <nav className={styles.nav}>
      <Image
        src={linkbrary}
        width={133}
        height={24}
        alt="linkbrary 로고 이미지"
      />
      <FolderPageHeaderProfile />
    </nav>
  );
};
export default FolderPageHeaderNavigation;
