import { useState, useEffect } from "react";
import { getFolder } from "../api";
<<<<<<< HEAD
import Nav from "../components/header/Nav/Nav";
import Folder from "../components/header/Folder/Folder";
import Search from "../components/section/Search/Search";
import Card from "../components/section/Card/Card";
import FooterLinks from "../components/footer/FooterLinks/FooterLinks";
=======
import Nav from "../components/Nav/Nav";
import Folder from "../components/Folder/Folder";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import Links from "../components/Links/Links";
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4

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
<<<<<<< HEAD
          <FooterLinks target="_blank" rel="noopener noreferrer" />
=======
          <Links target="_blank" rel="noopener noreferrer" />
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
        </div>
      </footer>
    </>
  );
}

export default App;
