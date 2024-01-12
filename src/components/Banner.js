import useGetFolderAsync from "../hooks/useGetFolderAsync";
import "./Banner.css";

export default function Banner() {
  const data = useGetFolderAsync();
  
  return (
    <section className="banner">
      <div className="banner-wrapper">
        <img
          className="banner-img"
          src={data?.owner?.profileImageSource}
          alt="banner-img"
        ></img>
        <span className="banner-user-name">@{data?.owner?.name}</span>
      </div>
      <div className="banner-title">{data?.name}</div>
    </section>
  );
}
