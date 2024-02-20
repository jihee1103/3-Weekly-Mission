import styles from "./FolderInfo.module.css";
import { useEffect, useState } from "react";
import { getFolderData } from "../../api/api";

interface Owner {
  profileImageSource: string;
  name: string;
}

interface Folder {
  owner: Owner;
  name: string;
}

interface FolderInfo {
  folder: Folder;
}

const FolderInfo = () => {
  const [folderInfo, setFolderInfo] = useState<FolderInfo>({
    folder: { owner: { profileImageSource: "", name: "" }, name: "" },
  });
  const handleFolderData = async () => {
    const folder = await getFolderData();
    setFolderInfo(folder);
  };
  useEffect(() => {
    handleFolderData();
  }, []);
  return (
    <div className={styles.folder}>
      <img
        className={styles.userProfile}
        src={folderInfo.folder.owner.profileImageSource}
        alt="폴더 프로필 이미지"
      />
      <h2 className={styles.userName}>@{folderInfo.folder.owner.name}</h2>
      <h2 className={styles.folderName}>{folderInfo.folder.name}</h2>
    </div>
  );
};

export default FolderInfo;
