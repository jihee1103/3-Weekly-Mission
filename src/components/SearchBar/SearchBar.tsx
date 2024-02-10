import styles from "./SearchBar.module.css";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../Content/Content";
import { useState } from "react";

function SearchBar() {
  const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value.toLowerCase());
    setInputValue(value);
  };

  const handleClickResetButton = (e: any) => {
    setKeyword("");
    setInputValue("");
  };

  return (
    <div className={styles.searchBar}>
      <button type="button" className={styles.searchIcon} />
      <input
        className={styles.text}
        type="text"
        id="search"
        placeholder="링크를 검색해 보세요."
        value={inputValue}
        onChange={handleInputChange}
      ></input>

      {keyword?.length > 0 && (
        <button className={styles.resetIcon} onClick={handleClickResetButton}>
          x
        </button>
      )}
    </div>
  );
}

export default SearchBar;
