import "./SearchArea.css";

const SearchArea = () => {
  return (
    <div className="search">
      <input className="searchArea" placeholder="링크를 검색해 보세요."></input>
      <img
        className="searchIcon"
        src={process.env.PUBLIC_URL + `/assets/Search.png`}
      />
    </div>
  );
};
export default SearchArea;
