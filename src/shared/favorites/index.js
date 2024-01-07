import { getSampleFolder } from '../../api/api';
import { useState, useEffect } from 'react';
import './style.css';

function Favorites() {
  const [favorites, setFavorites] = useState();

  const folderData = async () => {
    const data = await getSampleFolder();
    setFavorites(data);
  };

  useEffect(() => {
    folderData();
  }, []);

  return (
    <div className="favorites">
      <div className="favorites-container">
        <img
          className="owner-image"
          src={favorites?.owner?.profileImageSource}
          width="60"
        />
        <p className="owner-name">{favorites?.owner?.name}</p>
        <p className="favorites-name">{favorites?.name}</p>
      </div>
    </div>
  );
}

export default Favorites;
