import "./FolderPageLayout.css";

export const FolderPageLayout = ({ LinkForm, searchBar, folderToolBar, cardList }) => {
  return (
    <div className="FolderPageLayout">
      {LinkForm}
      <div className="FolderPageLayout-items">
        {searchBar}
        <div className="folder-box">
          {folderToolBar}
          {cardList}
        </div>
      </div>
    </div>
  );
};
