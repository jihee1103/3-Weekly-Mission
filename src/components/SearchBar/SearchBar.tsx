import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../Content/Content";

function SearchBar() {
  const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);
  const [isReset, setIsReset] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const handleClickResetButton = (e: any) => {
    setKeyword("");
    setIsReset(true);
  };

  return (
    <div className={styles.searchBar}>
      <button type="button" className={styles.searchIcon} />
      <input
        type="text"
        id="search"
        className={styles.text}
        placeholder="링크를 검색해 보세요."
        value={keyword}
        onChange={handleInputChange}
        autoFocus
      ></input>

      <button className={styles.resetIcon} onClick={handleClickResetButton} />
    </div>
  );
}

export default SearchBar;
