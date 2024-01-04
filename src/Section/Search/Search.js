import lensIconImg from "../../images/Search.svg";
import "./Search.css";

function Search() {
  return (
    <div className="search-box">
      <label>
        <input type="text" placeholder="링크를 검색해 보세요." className="search-bar" />
        <img src={lensIconImg} alt="돋보기아이콘" className="search-bar-img" />
      </label>
    </div>
  );
}

export default Search;
