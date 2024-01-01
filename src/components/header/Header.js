import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [profileImg, setProfileImg] = useState("");
  const [owner, setOwner] = useState("");
  const [folder, setFolder] = useState("");

  useEffect(() => {
    async function getFolderInfo() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        if (response.status === 200) {
          const data = await response.json();
          setProfileImg(data.folder.owner.profileImageSource);
          setOwner(data.folder.owner.name);
          setFolder(data.folder.name);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getFolderInfo();
  }, []);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-wrap">
            <img src={profileImg} alt="profile-img" />
            <p>{owner}</p>
          </div>
          <h1>{folder}</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
