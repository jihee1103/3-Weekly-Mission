import "./Searchbar.css";

function Searchbar() {
  return (
    <section className="container searchbar-container">
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className="search-input"
      />
    </section>
  );
}

export default Searchbar;
