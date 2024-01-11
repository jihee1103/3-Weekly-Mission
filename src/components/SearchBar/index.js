import search from "../../assets/search.svg";
import "./style.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <img className="SearchBar-icon" src={search} alt="검색 아이콘" />
      <input className="SearchBar-input" placeholder="링크를 검색해 보세요" />
    </div>
  );
};

export default SearchBar;
