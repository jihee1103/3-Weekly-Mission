const Search = () => {
  return (
    <div className="cards__search-bar">
      <img src={`${process.env.PUBLIC_URL}/images/Search.svg`} alt="돋보기 모양 사진" />
      <input type="search" placeholder="링크를 검색해 보세요." />
    </div>
  );
};

export default Search;
