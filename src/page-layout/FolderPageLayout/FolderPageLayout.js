import "./FolderPageLayout.css";

export const FolderPageLayout = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div className="FolderPageLayout">
      {folderInfo}
      <div className="FolderPageLayout-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
