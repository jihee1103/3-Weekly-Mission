import "./Banner.css";
import { useEffect, useState } from "react";
import { getFolders } from "../api";

export default function Banner() {
  const [folder, setFolder] = useState([]);
  const [owner, setOwner] = useState([]);

  const getFolder = async () => {
    const { folder } = await getFolders();
    const { owner } = folder;
    
    setFolder(folder);
    setOwner(owner);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <section className="banner">
      <div className="banner-wrapper">
        <img
          className="banner-img"
          src={owner.profileImageSource}
          alt="banner-img"
        ></img>
        <span className="banner-user-name">{owner.name}</span>
      </div>
      <div className="banner-title">{folder.name}</div>
    </section>
  );
}
