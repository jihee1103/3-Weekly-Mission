import { useEffect, useState } from "react";
import { getFolder } from "../../api";
import "./Folder.css";

const INIT_USER = {
  name: "Linkbrary",
  owner: {
    name: "anonymous",
    profileImageSource: "./images/logo.svg",
  },
};

function Folder() {
  const [folder, setFolder] = useState(INIT_USER);

  useEffect(() => {
    async function applyGetFolder() {
      const nextFolder = await getFolder();
      if (!nextFolder) return;
      setFolder(nextFolder.folder);
    }

    applyGetFolder();
  }, []);

  return (
    <div className="information">
      <div className="folder-info">
        <div className="user-info">
          <img
            className="owner-profile"
            src={folder.owner.profileImageSource}
            alt="소유자 프로필"
          />
          <span className="owner-name">{folder.owner.name}</span>
        </div>
        <div id="folder-name">{folder.name}</div>
      </div>
    </div>
  );
}

export default Folder;
