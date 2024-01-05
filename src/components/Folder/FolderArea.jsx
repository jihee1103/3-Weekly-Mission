import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './FolderArea.css';
import getFetchRequest from '../../utils/getFetchRequest';
import { API_FOLDER, BASE_API_HOST } from '../../constants/api';
import CardList from '../Card/CardList';

export default function FolderArea() {
  const [links, setLink] = useState([]);

  const getLinks = async () => {
    try {
      const result = await getFetchRequest(BASE_API_HOST, API_FOLDER);
      setLink(result.folder.links);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="folder-area-container">
      <div className="contents-box">
        <SearchBar />
        <CardList links={links} />
      </div>
    </div>
  );
}
