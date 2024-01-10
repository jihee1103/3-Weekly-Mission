import "./search-bar-style.css";
import search from "./search.png";

export function SearchBar() {
  return (
    <div className="input-section">
      <input
        className="search-bar"
        type="text"
        placeholder="링크를 검색해 보세요."
      ></input>
      <img src={search} className="input-icon" />
    </div>
  );
}
