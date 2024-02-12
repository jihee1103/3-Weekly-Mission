import "./SearchArea.css";

const SearchArea = ({ handleInputText, inputText }) => {
  return (
    <div className="search">
      <input
        className="searchArea"
        placeholder="링크를 검색해 보세요."
        value={inputText}
        onChange={handleInputText}
      ></input>
      <img
        className="searchIcon"
        src={process.env.PUBLIC_URL + `/assets/Search.png`}
        alt="검색 아이콘"
      />
      {inputText && (
        <img
          className="closeIcon"
          src={process.env.PUBLIC_URL + `/assets/input_close.png`}
          alt="삭제 아이콘"
        />
      )}
    </div>
  );
};
export default SearchArea;
