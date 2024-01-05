import useGetFolderAsync from "../hooks/useGetFolderAsync";
import "./Banner.css";
import { getFolder } from "../api";

export default function Banner() {
  const folder = useGetFolderAsync(getFolder);

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
