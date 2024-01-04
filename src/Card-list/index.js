import './style.css';
import { getFolderData } from '../api/api';
import { useState, useEffect } from 'react';
import Card from './card/index';

function CardList() {
  const [links, setLink] = useState([]);

  const folderData = async () => {
    const data = await getFolderData();

    setLink(data['folder'].links);
  };

  useEffect(() => {
    folderData();
  }, []);

  return (
    <div className="card-list">
      {links.map(link => {
        return <Card key={link.id} link={link} />;
      })}
    </div>
  );
}

export default CardList;
