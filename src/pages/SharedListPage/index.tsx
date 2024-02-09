import "./style.css";
import SharedLinks from "../../components/SharedLinks";
import SearchBar from "../../components/SearchBar";
import { SampleFolder } from "../../types";

interface SharedPageProps {
  folderObj: SampleFolder;
  loadingError?: string;
}

const SharedPage = ({ folderObj, loadingError }: SharedPageProps) => {
  const { owner, links, name } = folderObj;

  return (
    <>
      <main>
        <section className="folder-info">
          {loadingError && <div className="loading-error-message">{loadingError}</div>}
          <img className="folder-profile-image" src={owner.profileImageSource} alt={owner.name} />
          <div className="folder-profile-name">@{owner.name}</div>
          <div className="folder-name">{name}</div>
        </section>
        <section className="folder-links">
          <div className="SearchBar-wrapper">
            <SearchBar />
          </div>
          <SharedLinks className="SharedPage-folder-links" links={links} />
        </section>
      </main>
    </>
  );
};

export default SharedPage;
