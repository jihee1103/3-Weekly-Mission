import search from "../images/Search.png";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <img src={search} />
      <input className="search-input" placeholder="링크를 검색해 보세요." />
    </div>
  );
}

export default Search;
