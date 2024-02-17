import classNames from "classnames/bind";
import { LinkSearchInputProps } from "../../types/types";
import styles from "./LinkSearchInput.module.scss";

const cx = classNames.bind(styles);

export default function LinkSearchInput({
  setSearchTerm,
  searchTerm,
}: LinkSearchInputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <label className={cx("linkSearch-box")}>
      <img
        className={cx("search-img")}
        src="/images/Search.png"
        alt="링크검색버튼"
      />
      <input
        className={cx("searchInput")}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요"
      ></input>
      {searchTerm && (
        <button className={cx("clear-button")} onClick={clearSearchTerm}>
          <img src="/images/input_close.png" alt="Clear search" />
        </button>
      )}
    </label>
  );
}
