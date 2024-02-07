import { useState, useEffect } from 'react';
import { getFolder } from '../../api';
import Nav from '../../components/header/Nav/Nav';
import Folder from '../../components/header/Folder/Folder';
import Search from '../../components/section/Search/Search';
import Card from '../../components/section/Card/Card';
import FooterLinks from '../../components/footer/FooterLinks/FooterLinks';

export interface SharedLink {
  id: number;
  createdAt?: string;
  created_at?: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  image_source?: string;
}

export default function SharePage() {
  const [links, setLinks] = useState<SharedLink[]>([]);
  const [keyword, setKeyword] = useState('');

  const handleSearchOnChange = (nextKeyword: string) => {
    setKeyword(nextKeyword);
  };

  useEffect(() => {
    async function getLinks() {
      const { folder } = await getFolder();
      const { links } = folder;
      setLinks(links);
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
        <Search handleOnChange={handleSearchOnChange} />
        {keyword && (
          <span className="search-result">
            <strong>{keyword}</strong>으로 검색한 결과입니다.
          </span>
        )}
        <div className="pages">
          {links
            .filter((element) => {
              const { title, url, description } = element;
              return (
                url.toLowerCase().includes(keyword) ||
                title?.toLowerCase().includes(keyword) ||
                description?.toLowerCase().includes(keyword)
              );
            })
            .map((element: SharedLink) => {
              return <Card key={element.id} page={element} />;
            })}
        </div>
      </section>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <FooterLinks target="_blank" rel="noopener noreferrer" />
        </div>
      </footer>
    </>
  );
}
