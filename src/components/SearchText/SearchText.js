import "./SearchText.css";

const SearchText = ({ inputText }) => {
  return (
    <div className="textArea">
      <div className="inputText">{inputText}</div>
      <div className="defaultText">으로 검색한 결과입니다.</div>
    </div>
  );
};
export default SearchText;
