import { useEffect, useState } from "react";
import { getUserFolders } from "../api";
import "./FolderList.css";
export default function FolderList({ onSelectFolder }) {
  const [folderNames, setFolderNames] = useState([]);
  const handleFolderClick = (folder) => {
    onSelectFolder(folder);
  };
  useEffect(() => {
    async function handleload() {
      const { data } = await getUserFolders(1);
      setFolderNames(data);
    }
    handleload();
  }, []);
  return (
    <div className="folder-list-box">
      <ul className="folder-list">
        <li className="folder">
          <div onClick={() => handleFolderClick()}>전체</div>
        </li>
        {folderNames.map((folder) => {
          return (
            <li
              className="folder"
              key={folder.id}
              onClick={() => handleFolderClick(folder)}
            >
              <div>{folder.name}</div>
            </li>
          );
        })}
      </ul>
      <div className="folder-add-box">
        <input className="folder-add-input"></input>
        <img src="/imgs/add.png" alt="폴더추가하기" />
      </div>
    </div>
  );
}
