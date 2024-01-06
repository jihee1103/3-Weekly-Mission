import './style.css';
import { getFolderData } from '../api/api';
import { useState, useEffect } from 'react';
import Card from './card/index';

function CardList() {
  const [link, setLink] = useState([]);

  const folderData = async () => {
    const data = await getFolderData();

    setLink(data['folder'].links);
  };

  useEffect(() => {
    folderData();
  }, []);

  return (
    <div className="card-list">
      {link ? (
        link.map(link => {
          return <Card key={link.id} link={link} />;
        })
      ) : (
        <p className="no-link">저장된 링크가 없습니다.</p>
      )}
    </div>
  );
}

export default CardList;
