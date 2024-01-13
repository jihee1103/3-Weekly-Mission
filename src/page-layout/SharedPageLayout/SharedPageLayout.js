import "./SharedPageLayout.css";

export const SharedPageLayout = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div className="SharedPageLayout">
      {folderInfo}
      <div className="SharedPageLayout-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
