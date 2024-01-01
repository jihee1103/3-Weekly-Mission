import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import { useState, useEffect } from "react";
import { getFolder } from "../api";
import Nav from "./Nav";
import Folder from "./Folder";
import Search from "./Search";
import Card from "./Card";

function App() {
  const [pages, setPages] = useState([]);

  const handleGetLinks = async () => {
    const { folder } = await getFolder();
    const { links } = folder;
    setPages(links);
  };

  useEffect(() => {
    handleGetLinks();
  }, []);

  return (
    <>
      <header>
        <Nav />
        <Folder />
      </header>
      <article>
        <Search />
        <div className="pages">
          {pages.map((element) => {
            return <Card key={element.id} page={element} />;
          })}
        </div>
      </article>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <div className="footer-links">
            <a className="footer-link" href="privacy.html">
              Privacy Policy
            </a>
            <a className="footer-link" href="faq.html">
              FAQ
            </a>
          </div>
          <div className="sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="facebook 홈페이지로 연결된 facebook 로고"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter 홈페이지로 연결된 twitter 로고" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="youtube 홈페이지로 연결된 youtube 로고" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="instagram 홈페이지로 연결된 instagram 로고"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
