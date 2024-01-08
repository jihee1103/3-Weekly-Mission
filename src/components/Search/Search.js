import "./Search.css";

function Search() {
  return (
    <div className="search">
      <img src="./images/Search.png" alt="돋보기" />
      <input className="search-input" placeholder="링크를 검색해 보세요." />
    </div>
  );
}

export default Search;
