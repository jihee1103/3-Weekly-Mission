import Nav from "../../components/Nav";
import FolderLinks from "../../components/FolderLinks";
import Footer from "../../components/Footer";
import "./style.css";
import search from "../../assets/search.svg";

const SharedPage = ({ user, folderObj }) => {
  const { folder = {} } = folderObj;
  const { owner = {}, links = [] } = folder;

  return (
    <>
      <Nav user={user} />
      <main>
        <section className="folder-info">
          <img className="folder-profile-image" src={owner.profileImageSource} alt={owner.name} />
          <div className="folder-profile-name">@{owner.name}</div>
          <div className="folder-name">{folder.name}</div>
        </section>
        <section className="folder-links">
          <div className="link-search-bar">
            <img className="link-search-icon" src={search} alt="검색 아이콘" />
            <input className="link-search" placeholder="링크를 검색해 보세요." />
          </div>
          <FolderLinks className="SharedPage-folder-links" links={links} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedPage;
