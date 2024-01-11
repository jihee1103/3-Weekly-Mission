import "./style.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AddLinkBar from "../../components/AddLinkBar";
import SearchBar from "../../components/SearchBar";

const FolderPage = ({ user, folderObj }) => {
  const { folder = {} } = folderObj;
  const { owner = {}, links = [] } = folder;

  return (
    <>
      <Nav user={user} />
      <main>
        <section className="AddLinkBar-section">
          <div className="AddLinkBar-wrapper">
            <AddLinkBar />
          </div>
        </section>

        <section className="folder-links">
          <div className="SearchBar-wrapper">
            <SearchBar />
          </div>
          {/* <SharedLinks className="SharedPage-folder-links" links={links} /> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;
