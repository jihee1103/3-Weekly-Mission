import React from 'react';
import '../../styles/pages/favorites.css';
import Top from "./Top";
import Contents from "./Contents";

function Favorites() {
  return (
      <div className="favorites">
        <Top/>
        <Contents/>
      </div>);
}

export default Favorites;