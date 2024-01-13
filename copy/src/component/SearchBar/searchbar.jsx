import "./search-bar-style.css";

export function SearchBar() {
  return (
    <div className="input-section">
      <input
        className="search-bar"
        type="search"
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
}
