import styles from "./SearchArea.module.css";
import Image from "next/image";
import searchIcon from "@/public/assets/Search.png";
import closeIcon from "@/public/assets/input_close.png";

const SearchArea = ({ handleInputText, inputText, deleteInput }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.searchArea}
        placeholder="링크를 검색해 보세요."
        value={inputText}
        onChange={handleInputText}
      ></input>
      <Image className={styles.searchIcon} src={searchIcon} alt="검색 아이콘" />
      {inputText && (
        <Image
          className={styles.closeIcon}
          src={closeIcon}
          alt="삭제 아이콘"
          onClick={deleteInput}
        />
      )}
    </div>
  );
};
export default SearchArea;
