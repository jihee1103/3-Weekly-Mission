import { useState, useEffect } from "react";
import { getFolder } from "../../api";
import "./FolderPage.css";
import Nav from "../../components/Nav/Nav";
import Search from "../../components/Search/Search";
import Links from "../../components/Links/Links";
import AddLink from "../../components/AddLink/AddLink";
import FolderFilter from "../../components/FolderFilter/FolderFilter";

function FolderPage() {
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    async function applyGetFolder() {
      const nextFolder = await getFolder();
      if (!nextFolder) return;
      setFolder(nextFolder.folder);
    }

    applyGetFolder();
  }, []);

  return (
    <>
      <header>
        <Nav className="not-fixed" id="1" />
        <AddLink />
      </header>
      <section>
        <Search />
        <div className="folders">
          <FolderFilter />
        </div>
      </section>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <Links target="_blank" rel="noopener noreferrer" />
        </div>
      </footer>
    </>
  );
}

export default FolderPage;
