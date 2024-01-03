import SearchIcon from "../../asset/SearchIcon.svg";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <form className="search-form">
      <div className="search-input-wrapper">
        <img
          src={SearchIcon}
          alt="SearchIcon"
          className="search-icon"
        />
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          className="search-input"
        />
      </div>
    </form>
  );
}
