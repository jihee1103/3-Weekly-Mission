import "./style.css";
import SharedLinks from "../../components/SharedLinks";
import SearchBar from "../../components/SearchBar";
import { SampleFolder } from "../../types";
import { useState } from "react";

interface SharedPageProps {
  folderObj: SampleFolder;
  loadingError?: string;
}

const SharedPage = ({ folderObj, loadingError }: SharedPageProps) => {
  const { owner, links, name } = folderObj;
  const [sharedPageLinks, setSharedPageLinks] = useState(links);

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
            <SearchBar setSharedPageLinks={setSharedPageLinks} />
          </div>
          <SharedLinks className="SharedPage-folder-links" sharedPageLinks={sharedPageLinks} />
        </section>
      </main>
    </>
  );
};

export default SharedPage;
