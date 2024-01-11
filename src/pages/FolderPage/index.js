import "./style.css";
import search from "../../assets/search.svg";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AddLinkBar from "../../components/AddLinkBar";

const FolderPage = ({ user, folderObj }) => {
  const { folder = {} } = folderObj;
  const { owner = {}, links = [] } = folder;

  return (
    <>
      <Nav user={user} />
      <main>
        <AddLinkBar />
        <section className="folder-links">
          <div className="link-search-bar">
            <img className="link-search-icon" src={search} alt="검색 아이콘" />
            <input className="link-search" placeholder="링크를 검색해 보세요." />
          </div>
          {/* <SharedLinks className="SharedPage-folder-links" links={links} /> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;
