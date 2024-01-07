import "./FolderList.css";

const FolderList = ({ folderList }) => {
  return (
    <div className="folderList">
      <p className="folderItem">전체</p>
      {folderList.map((item) => (
        <p className="folderItem">{item.name}</p>
      ))}
    </div>
  );
};

export default FolderList;
