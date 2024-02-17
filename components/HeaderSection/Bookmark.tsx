import useUserProfileData from "../../hook/useUserProfileData";
import { UserProfileType } from "../../types/Types";
import styles from './HeaderSection.module.css';

export default function Bookmark() {
  const { folderData } = useUserProfileData();

  if (folderData === null) return null;

  return (
    <div className={styles.headerUnder}>
      {folderData.folder.owner && (
        <div className={styles.bookmarkArea}>
          <img
            className={styles.userLogo}
            src={folderData.folder.owner.profileImageSource}
            alt="codeit"
          />
          <p className={styles.userName}>@{folderData.folder.owner.name}</p>
          <p className={styles.bookmarkText}>{folderData.folder.name}</p>
        </div>
      )}
    </div>
  );
}
