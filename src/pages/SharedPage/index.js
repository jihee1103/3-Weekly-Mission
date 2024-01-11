import "./style.css";
import SharedLinks from "../../components/SharedLinks";
import search from "../../assets/search.svg";

const SharedPage = ({ sampleFolderObj, loadingError }) => {
  const { folder = {} } = sampleFolderObj;
  const { owner = {}, links = [] } = folder;

  return (
    <>
      <main>
        <section className="folder-info">
          {loadingError && <div className="loading-error-message">{loadingError.message}</div>}
          <img className="folder-profile-image" src={owner.profileImageSource} alt={owner.name} />
          <div className="folder-profile-name">@{owner.name}</div>
          <div className="folder-name">{folder.name}</div>
        </section>
        <section className="folder-links">
          <div className="link-search-bar">
            <img className="link-search-icon" src={search} alt="검색 아이콘" />
            <input className="link-search" placeholder="링크를 검색해 보세요." />
          </div>
          <SharedLinks className="SharedPage-folder-links" links={links} />
        </section>
      </main>
    </>
  );
};

export default SharedPage;
