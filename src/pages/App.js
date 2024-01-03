import { useState, useEffect } from "react";
import { getFolder } from "../api";
import Nav from "../components/Nav/Nav";
import Folder from "../components/Folder/Folder";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import Links from "../components/Links/Links";

function App() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function getLinks() {
      const { folder } = await getFolder();
      const { links } = folder;
      setPages(links);
    }

    getLinks();
  }, []);

  return (
    <>
      <header>
        <Nav />
        <Folder />
      </header>
      <section>
        <Search />
        <div className="pages">
          {pages.map((element) => {
            return <Card key={element.id} page={element} />;
          })}
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

export default App;
