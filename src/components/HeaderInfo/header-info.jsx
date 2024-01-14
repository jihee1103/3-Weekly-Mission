import "./header-info-style.css";

export function HeaderInfo(folder) {
  return (
    <div className="header-info">
      <img
        src={folder.folder.owner.profileImageSource}
        className="header-profile"
      ></img>
      <div className="header-user">
        {"@"}
        {folder.folder.owner.name}
      </div>
      <div className="header-title">{folder.folder.name}</div>
    </div>
  );
}
