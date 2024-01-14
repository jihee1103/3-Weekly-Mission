import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <img
        className={styles.searchIcon}
        src="/assets/search-icon.svg"
        alt="search"
      />
      <span className={styles.text}>링크를 검색해 보세요.</span>
    </div>
  );
}

export default SearchBar;
