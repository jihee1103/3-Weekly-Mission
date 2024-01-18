import { useEffect, useState } from "react";
import { getFolderInfo } from "../../utils/api";
import "./Titlebar.css";

function Titlebar() {
  const [profileImg, setProfileImg] = useState(null);
  const [owner, setOwner] = useState(null);
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    const fetchFolderDate = async () => {
      try {
        const data = await getFolderInfo();

        setProfileImg(data.folder.owner.profileImageSource);
        setOwner(data.folder.owner.name);
        setFolder(data.folder.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFolderDate();
  });

  return (
    <section className="titlebar-container">
      <div className="titlebar-content">
        <img src={profileImg} alt="폴더 주인 프로필 이미지" />
        <p>@{owner}</p>
        <h2>{folder}</h2>
      </div>
    </section>
  );
}

export default Titlebar;
