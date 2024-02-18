import useUserProfileData from "../../hook/useUserProfileData";
import styles from './HeaderSection.module.css';

export default function Bookmark() {
  const { folderData } = useUserProfileData();

  if (folderData === null) return null;

  return (
    <div className={styles.header_Under}>
      {folderData.folder.owner && (
        <div className={styles.bookmark_Area}>
          <img
            className={styles.user_Logo}
            src={folderData.folder.owner.profileImageSource}
            alt="codeit"
          />
          <p className={styles.user_Name}>@{folderData.folder.owner.name}</p>
          <p className={styles.bookmark_Text}>{folderData.folder.name}</p>
        </div>
      )}
    </div>
  );
}
