"use client";

import styles from "./index.module.css";

const SearchLinkBar = () => {
  return (
    <input
      type="search"
      placeholder="링크를 검색해 보세요."
      className={styles.input}
    />
  );
};
export default SearchLinkBar;
