import searchIcon from "../assets/search-icon.svg";
import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="search-bar">
        <img className="search-icon" src={searchIcon} alt="search" />
        <span className="text">링크를 검색해 보세요.</span>
      </div>
    </>
  );
}

export default SearchBar;
