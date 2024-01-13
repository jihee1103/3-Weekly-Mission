import "./FolderInfo.css";

export const FolderInfo = ({ profileImage, ownerName, foldername }) => {
  return (
    <div className="FolderInfo">
      <img className="FolderInfo-profile" src={profileImage} alt="폴더 소유자 프로필 이미지" />
      <span className="FolderInfo-owner">{ownerName}</span>
      <h2 className="FolderInfo-folder">{foldername}</h2>
    </div>
  );
};
