import AddFolderButton from "../components/AddFolderButton";
import AddLinkBar from "../components/AddLinkBar";
import FolderContentsList from "../components/FolderContentsList";
import FolderFunctionButtons from "../components/FolderFunctionButtons";
import FolderNameButton from "../components/FolderNameButton";
import FolderTitle from "../components/FolderTitle";
import Footer from "../components/Footer";
import HeaderNavigation from "../components/HeaderNavigation";
import SearchLinkBar from "../components/SearchLinkBar";

const FolderPage = () => {
  return (
    <>
      <header>
        <HeaderNavigation />
        <AddLinkBar />
      </header>
      <main>
        <section>
          <SearchLinkBar />
        </section>
        <section>
          <FolderNameButton />
          <AddFolderButton />
        </section>
        <article>
          <header>
            <FolderTitle />
            <FolderFunctionButtons />
          </header>
          <FolderContentsList />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;
