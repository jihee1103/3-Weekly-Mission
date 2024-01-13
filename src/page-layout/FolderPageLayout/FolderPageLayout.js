import "./FolderPageLayout.css";

export const FolderPageLayout = ({ LinkForm, searchBar, cardList }) => {
  return (
    <div className="FolderPageLayout">
      {LinkForm}
      <div className="FolderPageLayout-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
