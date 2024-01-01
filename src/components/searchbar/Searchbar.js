import Search from "../../images/Search.png";
import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="search-container">
      <label>
        <input
          className="search-bar"
          type="text"
          placeholder="링크를 검색해 보세요."
        />
        <img src={Search} alt="search-bar" />
      </label>
    </div>
  );
}

export default Searchbar;
