import search from '../../../assets/images/Search.svg';

const Search = () => {
    return (
        <div className="cards__search-bar">
            <img src={search} alt="돋보기 모양 사진" />
            <input placeholder="링크를 검색해 보세요."></input>
        </div>
    );
};

export default Search;
