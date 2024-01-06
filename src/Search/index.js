import search from './images/Search.svg';
import './style.css';

function Search() {
  return (
    <form className="form">
      <img className="search-icon" width="16" src={search} />
      <label htmlFor="input-search" />
      <input
        className="input"
        id="input-search"
        placeholder="링크를 검색해 보세요"
        name="searchData"
      />
    </form>
  );
}

export default Search;
