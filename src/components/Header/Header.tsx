import { useFolderData } from "../../hooks/useFolderData";
import styles from "./Header.module.css";

function Header() {
  const { folderData } = useFolderData();

  return (
    <header>
      <div className={styles.folderInfo}>
        <img
          className={styles.folderOwnerProfile}
          src={folderData?.folder?.owner?.profileImageSource}
          alt="folder-owner-profile-img"
        />
        <span className={styles.folderOwnerName}>
          @{folderData?.folder?.owner?.name}
        </span>
        <span className={styles.folderName}>{folderData?.folder?.name}</span>
        {/* {loadingError?.message && <span>{loadingError.message}</span>} */}
      </div>
    </header>
  );
}

export default Header;
