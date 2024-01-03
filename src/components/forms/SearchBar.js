import React from 'react';
import searchIcon from '../../assets/icons/icon-lens.svg';

const SearchBar = () => {

  return (
      <div className="search-bar">
          <div className="suggest-box">
            <img src={searchIcon} alt="search-icon"/>
            <span>링크를 검색해 보세요.</span>
          </div>
      </div>
  )
}

export default SearchBar;