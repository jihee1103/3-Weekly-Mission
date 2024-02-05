import { useState, useEffect } from 'react';
import { getFolder } from '../api';
import Nav from '../components/header/Nav/Nav';
import Folder from '../components/header/Folder/Folder';
import Search from '../components/section/Search/Search';
import Card from '../components/section/Card/Card';
import FooterLinks from '../components/footer/FooterLinks/FooterLinks';

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
        <div className='pages'>
          {pages.map((element) => {
            return <Card key={element.id} page={element} />;
          })}
        </div>
      </section>
      <footer>
        <div className='footer-box'>
          <span className='copyright'>©codeit - 2023</span>
          <FooterLinks target='_blank' rel='noopener noreferrer' />
        </div>
      </footer>
    </>
  );
}

export default App;
