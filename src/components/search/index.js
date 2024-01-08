import './style.css';

function Search() {
  return (
    <form className="form search__form">
      <img className="search-icon" width="16" src="/search.svg" />
      <label htmlFor="input-search" />
      <input
        className="input search__input"
        id="input-search"
        placeholder="링크를 검색해 보세요"
        name="searchData"
      />
    </form>
  );
}

export default Search;
