import { useEffect, useState } from "react";
import { getFolder } from "../api";
import "../Folder.css";

function Folder() {
  const [ownerProfile, setOwnerProfile] = useState();
  const [ownerName, setOwnerName] = useState("Linkbrary");
  const [folderName, setFolderName] = useState("anonymous");

  const handleGetFoler = async () => {
    const { folder } = await getFolder();
    const { name, owner } = folder;

    setOwnerProfile(owner["profileImageSource"]);
    setOwnerName(owner["name"]);
    setFolderName(name);
  };

  useEffect(() => {
    handleGetFoler();
  }, []);

  return (
    <div className="information">
      <div className="folder-info">
        <div className="user-info">
          <img
            className="owner-profile"
            src={ownerProfile}
            alt="소유자 프로필"
          />
          <span>{ownerName}</span>
        </div>
        <div id="folder-name">{folderName}</div>
      </div>
    </div>
  );
}

export default Folder;
