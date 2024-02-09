import styles from "./SearchBar.module.css";
import { useRecoilState } from "recoil";
import { resetAtom, searchKeyword } from "../Content/Content";

function SearchBar() {
  const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);
  const [isReset, setIsReset] = useRecoilState<boolean>(resetAtom);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
    setIsReset(false);
  };

  const handleClickResetButton = (e: any) => {
    setKeyword("");
    setIsReset(true);
  };

  return (
    <div className={styles.searchBar}>
      <button type="button" className={styles.searchIcon} />
      <input
        className={styles.text}
        type="text"
        id="search"
        placeholder="링크를 검색해 보세요."
        value={keyword}
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
