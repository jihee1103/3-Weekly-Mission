import { getFolderSample } from '../../api';
import { useState, useEffect } from 'react';
import './style.css';

function Favorites() {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    (async () => {
      const data = await getFolderSample();
      setFavorites(data);
    })();
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
