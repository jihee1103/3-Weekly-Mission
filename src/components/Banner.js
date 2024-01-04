import "./Banner.css";
import { useEffect, useState } from "react";
import { getFolders } from "../api";

export default function Banner() {
  const [folder, setFolder] = useState(null); // 옵셔널 체이닝 사용하여 변수값 사용

  const getFolder = async () => {
    const { folder } = await getFolders();
    setFolder(folder);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <section className="banner">
      <div className="banner-wrapper">
        <img
          className="banner-img"
          src={folder?.owner?.profileImageSource}
          alt="banner-img"
        ></img>
        <span className="banner-user-name">@{folder?.owner?.name}</span>
      </div>
      <div className="banner-title">{folder?.name}</div>
    </section>
  );
}
